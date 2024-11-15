import ChunkCollection, { IChunkDocument } from '../models/Chunk';
import generateEmbedding from '../utils/gemini/generateEmbedding';

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
          index: 'chunk_vector_index',
          path: 'embedding',
          queryVector: embedding,
          numCandidates: 500,
          limit: 20,
        },
      },
      {
        $project: {
          _id: 1,
          data: 1,
          articleId: 1,
          articleTitle: 1,
          score: { $meta: 'vectorSearchScore' },
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
