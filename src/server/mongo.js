import {MongoClient, GridFSBucket} from 'mongodb';
import * as mongodb from 'mongodb';

async function getMongo() {
    const client = new MongoClient(
        `mongodb+srv://app:${process.env.MONGO_PASSWORD}@aftertime.oe6rw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    await client.connect()
    const db = await client.db('aftertime')
    const gridFs = new GridFSBucket(db, {bucketName: 'memories'});
    return {client, db, gridFs}
}

export default {getMongo, mongodb};