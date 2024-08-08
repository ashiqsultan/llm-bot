import RecordCollection, { IRecordDocument } from "../models/Record";
import generateEmbedding from "../utils/openai/generateEmbedding";

export default async function createOne(
  data: string
): Promise<IRecordDocument> {
  try {
    const collection = await RecordCollection();
    const embedding = await generateEmbedding(JSON.stringify(data));
    const newDoc = await collection.insertOne({ data, embedding });
    const result = await collection.findOne({ _id: newDoc.insertedId });
    // @ts-ignore
    return result;
  } catch (error) {
    throw error;
  }
}
