import ArticleCollection, {
  IArticle,
  IArticleDocument,
} from '../models/Article';

export default async function createArticle(
  article: IArticle
): Promise<IArticleDocument> {
  try {
    const collection = await ArticleCollection();
    const insertArticle = await collection.insertOne(article);
    const createdArticle = await collection.findOne({
      _id: insertArticle.insertedId,
    });
    if (!createdArticle) throw 'Error creating article';
    return createdArticle;
  } catch (error) {
    throw error;
  }
}
