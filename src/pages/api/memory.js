import connectBusboy from 'connect-busboy';
import nextConnect from 'next-connect';
import mongo from '../../server/mongo';

export default nextConnect()
  .use(connectBusboy())
  .post(async (req, res) => {
    await mongo.client.connect();
    const files = [];
    let memoryId = null;
    if (req.busboy) {
      req.busboy.on('file', (name, file, info) => {
        const writeStream = mongo.gridFs.openUploadStream(info.filename, {
          contentType: info.mimeType,
        });
        files.push(writeStream.id);
        file.pipe(writeStream);
      });
      req.busboy.on('field', (name, value, info) => {
        if (name === 'id') {
          memoryId = value;
        }
      });
      req.busboy.on('finish', async () => {
        const result = await mongo.db.collection('memories').insertOne({
          files,
        });
        res.send({id: result.insertedId.toString()});
      });
      req.pipe(req.busboy);
    }
  })
  .get(async (req, res) => {
    await mongo.client.connect();
    const memory = await mongo.db.collection('memories').findOne({
      _id: new mongo.mongodb.ObjectId(req.query.memory),
    });
    const files = await Promise.all(
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
    );
    res.send({
      ...memory,
      files,
    });
  });

export const config = {
  api: {
    bodyParser: false,
  },
};
