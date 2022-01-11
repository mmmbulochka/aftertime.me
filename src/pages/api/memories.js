import mongo from '../../server/mongo.js';

async function memories(req, res) {
  await mongo.client.connect();
  const memories = await mongo.db.collection('memories').find({}).toArray();

  res.send(memories);
}

export default memories;
