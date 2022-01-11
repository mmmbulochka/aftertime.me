import mongo from '../../server/mongo.js';

async function memories(req, res) {
  await mongo.client.connect();
  const memories = await mongo.db.collection('memories').find({}).toArray();

  const preparedMemories = await Promise.all(
    memories.map(async (memory) => {
      return {
        id: memory._id,
        files: await Promise.all(
          memory.files.map(async (file) => {
            const fileDb = (
              await mongo.gridFs
                .find({
                  _id: file,
                })
                .toArray()
            )[0];
            return `http://${req.headers.host}/api/files/${file.toString()}/${
              fileDb.filename
            }`;
          })
        ),
      };
    })
  );

  res.send(preparedMemories);
}

export default memories;
