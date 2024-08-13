import { ObjectId } from 'mongodb';
import ArticleCollection, { IArticleDocument } from '../models/Article';

export default async function getArticleById(id: string): Promise<IArticleDocument> {
  try {
    const collection = await ArticleCollection();
    const articles = await collection.find({ _id: new ObjectId(id) }).toArray();
    return articles[0];
  } catch (error) {
    throw error;
  }
}
