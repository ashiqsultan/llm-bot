import textSplitter from "../utils/openai/textSplitter";
import RecordCollection, { IRecordDocument } from "../models/Record";
import generateEmbedding from "../utils/openai/generateEmbedding";

export default async function createRecord(
  data: string
): Promise<string> {
  try {
    // chunk text
    const chunkedTextArr = await textSplitter(data);
    // Create promises
    const insertPromises = chunkedTextArr.map(async (chunk) => {
      const collection = await RecordCollection();
      const embedding = await generateEmbedding(chunk);
      return collection.insertOne({ data: chunk, embedding });
    });
    // Insert Chunks
    const insertResults = await Promise.all(insertPromises);
    // @ts-ignore
    return "Record creation done";
  } catch (error) {
    throw error;
  }
}
