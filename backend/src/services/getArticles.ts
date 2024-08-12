import ArticleCollection, { IArticleDocument } from '../models/Article';

export default async function getArticles(): Promise<IArticleDocument[]> {
  try {
    const collection = await ArticleCollection();
    const articles = await collection.find({}).toArray();
    return articles;
  } catch (error) {
    throw error;
  }
}
