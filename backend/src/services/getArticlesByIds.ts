import { ObjectId } from 'mongodb';
import ArticleCollection, { IArticleDocument } from '../models/Article';

export default async function getArticlesByIds(
  ids: string[]
): Promise<IArticleDocument[]> {
  try {
    const collection = await ArticleCollection();
    const uniqueIds = Array.from(new Set(ids));
    const articleIds = uniqueIds.map((id) => new ObjectId(id));
    const articles = await collection
      .find({ _id: { $in: articleIds } })
      .project({ _id: 1, title: 1 })
      .toArray();
    // @ts-ignore
    return articles;
  } catch (error) {
    throw error;
  }
}
