import { MongoClient } from 'mongodb';

export async function insertDataToCollection(db, targetCollection, data) {
  const result = await db.collection(targetCollection).insertOne(data);
  return result;
}

export function loadDatabase(client, dbName) {
  if (client?.db) {
    return client.db(dbName);
  }

  return null;
}
export async function createConnection() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clutsername}.xycgo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  return await MongoClient.connect(connectionString);
}
