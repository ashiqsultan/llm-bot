import { ObjectId, Collection, Document } from 'mongodb';
import dbClient from '../dbClient';

export interface IChunk {
  data: string;
  embedding: Array<number>;
  articleId: string;
}

export interface IChunkDocument extends IChunk, Document {
  _id?: ObjectId;
}

const ChunkCollection = async (): Promise<Collection<IChunkDocument>> => {
  const mongoClient = await dbClient();
  const collection: Collection<IChunkDocument> = mongoClient
    .db('llmbotdb')
    .collection('chunks');
  return collection;
};

export default ChunkCollection;
