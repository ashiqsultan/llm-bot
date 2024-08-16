import ChunkCollection, { IChunkDocument } from "../models/Chunk";
import generateEmbedding from "../utils/openai/generateEmbedding";

const semanticSearch = async (
  searchText: string
): Promise<IChunkDocument[]> => {
  try {
    const embedding = await generateEmbedding(searchText);
    const collection = await ChunkCollection();
    // Query DB
    const aggCursor = collection.aggregate<IChunkDocument>([
      {
        $vectorSearch: {
          index: "chunk_vector_index",
          path: "embedding",
          queryVector: embedding,
          numCandidates: 150,
          limit: 5,
        },
      },
      {
        $project: {
          _id: 1,
          data: 1,
          articleId: 1,
          articleTitle: 1,
          score: { $meta: "vectorSearchScore" },
        },
      },
    ]);
    const chunks: IChunkDocument[] = [];
    for await (const doc of aggCursor) {
      chunks.push(doc);
    }
    return chunks;
  } catch (error) {
    throw error;
  }
};

export default semanticSearch;
