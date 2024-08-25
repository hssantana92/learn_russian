import { MongoClient } from "mongodb";

export default async function DB_CONTROLLER(collectionName: string){

    const client = new MongoClient(process.env.MDB as string);
    await client.connect();

    const database = client.db('lr_db');
    const collection = database.collection(collectionName);

    return collection;
}