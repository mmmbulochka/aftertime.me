import {MongoClient, GridFSBucket} from 'mongodb';
import * as mongodb from 'mongodb';

const client = new MongoClient(
  `mongodb+srv://app:${process.env.MONGO_PASSWORD}@aftertime.oe6rw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);

export const db = client.db('aftertime');
export const gridFs = new GridFSBucket(db, {bucketName: 'files'});

export default {client, db, gridFs, mongodb};
