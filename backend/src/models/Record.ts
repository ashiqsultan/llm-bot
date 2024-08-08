import { ObjectId, Collection, Document } from "mongodb";
import dbClient from "../dbClient";

export interface IRecord {
  data: string;
  embedding: Array<number>;
}

export interface IRecordDocument extends IRecord, Document {
  _id?: ObjectId;
}

const RecordCollection = async (): Promise<Collection<IRecordDocument>> => {
  const mongoClient = await dbClient();
  const collection: Collection<IRecordDocument> = mongoClient
    .db("llmbotdb")
    .collection("records");
  return collection;
};

export default RecordCollection;
