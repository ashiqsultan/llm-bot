import textSplitter from '../utils/openai/textSplitter';
import ChunkCollection from '../models/Chunk';
import generateEmbedding from '../utils/openai/generateEmbedding';
import { IArticleDocument } from '../models/Article';

export default async function createChunk(
  article: IArticleDocument
): Promise<string> {
  try {
    // chunk text
    const chunkedTextArr = await textSplitter(article.content);
    // Create promises
    const insertPromises = chunkedTextArr.map(async (chunk) => {
      const collection = await ChunkCollection();
      const embedding = await generateEmbedding(chunk);
      return collection.insertOne({
        data: chunk,
        embedding,
        articleId: article._id?.toString() || '',
      });
    });
    // Insert Chunks
    await Promise.all(insertPromises);
    return 'Chunk creation done';
  } catch (error) {
    throw error;
  }
}
