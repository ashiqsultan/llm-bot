import RecordCollection, { IRecordDocument } from "../models/Record";
import generateEmbedding from "../utils/openai/generateEmbedding";

const semanticSearch = async (
  searchText: string
): Promise<IRecordDocument[]> => {
  try {
    const embedding = await generateEmbedding(searchText);
    const collection = await RecordCollection();
    // Query DB
    const aggCursor = collection.aggregate<IRecordDocument>([
      {
        $vectorSearch: {
          index: "vector_index_01",
          path: "embedding",
          queryVector: embedding,
          numCandidates: 150,
          limit: 2,
        },
      },
      {
        $project: {
          _id: 1,
          data: 1,
          // embedding: 1,
          score: { $meta: "vectorSearchScore" },
        },
      },
    ]);
    const records: IRecordDocument[] = [];
    for await (const doc of aggCursor) {
      records.push(doc);
    }
    return records;
  } catch (error) {
    throw error;
  }
};

export default semanticSearch;
