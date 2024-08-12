import { ObjectId, Collection, Document } from "mongodb";
import dbClient from "../dbClient";

export interface IArticle {
  title: string;
  content: string;
}

export interface IArticleDocument extends IArticle, Document {
  _id?: ObjectId;
}

const ArticleCollection = async (): Promise<Collection<IArticleDocument>> => {
  const mongoClient = await dbClient();
  const collection: Collection<IArticleDocument> = mongoClient
    .db("llmbotdb")
    .collection("articles");
  return collection;
};

export default ArticleCollection;
