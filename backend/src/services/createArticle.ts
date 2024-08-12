import ArticleCollection, { IArticle } from '../models/Article';

export default async function createArticle(article: IArticle): Promise<string> {
  try {
    const collection = await ArticleCollection();
    const createOp = await collection.insertOne(article);
    return 'Article creation done';
  } catch (error) {
    throw error;
  }
}
