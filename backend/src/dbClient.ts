import { MongoClient } from "mongodb";
import config from "./config";

const uri = config.mongoDBUri;
let db: MongoClient;

const dbClient = async (): Promise<MongoClient> => {
  try {
    if (db) {
      return db;
    }
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to db");
    db = client;
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default dbClient;
