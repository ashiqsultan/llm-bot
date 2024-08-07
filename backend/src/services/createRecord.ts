import RecordCollection, { IRecordDocument, IRecord } from "../models/Record";
import generateEmbedding from "../utils/openai/generateEmbedding";

export default async function createOne(
  record: IRecord
): Promise<IRecordDocument> {
  try {
    const collection = await RecordCollection();
    // const toEmbed = {
    //   data: record.data,
    // };
    // const embedding = await generateEmbedding(JSON.stringify(toEmbed));
    const newDoc = await collection.insertOne({ data: record.data });
    const result = await collection.findOne({ _id: newDoc.insertedId });
    // @ts-ignore
    return result;
  } catch (error) {
    throw error;
  }
}
