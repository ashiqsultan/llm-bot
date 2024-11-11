import ArticleCollection from '../models/Article';

export default async function deleteAllChunks(): Promise<void> {
  try {
    const collection = await ArticleCollection();
    await collection.deleteMany({}); // Deletes all documents in the collection
  } catch (error) {
    throw error;
  }
}
