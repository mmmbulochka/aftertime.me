import connectBusboy from 'connect-busboy';
import nextConnect from 'next-connect';
import mongo from '../../server/mongo';

export default nextConnect()
  .use(connectBusboy())
  .post(async (req, res) => {
    const {db, gridFs, client} = await mongo.getMongo()
    const filesPromises =  []
    let data = null;
    let memoryId = null;
    if (req.busboy) {
      req.busboy.on('file', (name, file, info) => {
        const writeStream = gridFs.openUploadStream(info.filename, {
          contentType: info.mimeType,
        });
        file.pipe(writeStream);
        filesPromises.push(new Promise((resolve, reject) => {
            writeStream.on('finish', () => resolve({id: writeStream.id, name: name}))
            writeStream.on('error', (error) => reject(error))
        }))
      });
      req.busboy.on('field', (name, value) => {
        if (name === 'id') {
          memoryId = value;
        }
        if (name === 'data') {
          data = JSON.parse(value);
        }
      });
      req.busboy.on('close', async () => {
          const files = await Promise.all(filesPromises)
        const result = await db.collection('memories').insertOne({
          files: files.filter(({name}) => name !== 'icon').map(({id}) => id),
            icon: files.filter(({name}) => name === 'icon')[0].id,
          message: data.message,
          date: data.date,
          created: Math.round(Date.now() / 1000),
        });
        res.send({id: result.insertedId.toString()});
        await client.close()
      });
      req.pipe(req.busboy);
    }
  })
  .get(async (req, res) => {
    const {db, gridFs, client} = mongo.getMongo()
    const memory = await db.collection('memories').findOne({
      _id: new mongo.mongodb.ObjectId(req.query.memory),
    });
    const files = await Promise.all(
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
    );
    const icon = (await gridFs
      .find({
          _id: memory.icon,
      })
      .toArray())[0]
    res.send({
      id: memory._id,
      ...memory,
      files,
      icon: `http://${req.headers.host}/api/files/${memory.icon.toString()}/${
        icon.filename
      }`
    });
    await client.close()
  });

export const config = {
  api: {
    bodyParser: false,
  },
};
