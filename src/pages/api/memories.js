import mongo from '../../server/mongo.js';

async function memories(req, res) {
  const {db, gridFs, client} = await mongo.getMongo();
  const memories = await db.collection('memories').find({}).toArray();

  const preparedMemories = await Promise.all(
    memories.map(async (memory) => {
      const icon = (
        await gridFs
          .find({
            _id: memory.icon,
          })
          .toArray()
      )[0];
      return {
        ...memory,
        id: memory._id,
        icon: `http://${req.headers.host}/api/files/${memory.icon.toString()}/${
          icon.filename
        }`,
        files: await Promise.all(
          memory.files.map(async (file) => {
            const fileDb = (
              await gridFs
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
  await client.close();
}

export default memories;
