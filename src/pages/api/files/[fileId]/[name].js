import mongo from '../../../../server/mongo';

async function file(req, res) {
  const {client, gridFs} = await mongo.getMongo();

  gridFs
    .openDownloadStream(new mongo.mongodb.ObjectId(req.query.fileId))
    .pipe(res)
    .on('close', () => {
      client.close();
    });
}

export default file;
