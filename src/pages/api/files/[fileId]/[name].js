import mongo from '../../../../server/mongo';

async function file(req, res) {
  await mongo.client.connect();

  mongo.gridFs
    .openDownloadStream(new mongo.mongodb.ObjectId(req.query.fileId))
    .pipe(res);
}

export default file;
