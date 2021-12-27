import connectBusboy from 'connect-busboy';
import nextConnect from 'next-connect';

export default nextConnect()
  .use(connectBusboy())
  .post(async (req, res) => {
    console.log('POST');
    // console.log('-----', 'req.busboy', req.busboy);
    if (req.busboy) {
      req.busboy.on('file', (name, file, info) => {
        console.log('-----', 'file');
        res.send('bye');
      });
      req.busboy.on('field', (name, value, info) => {
        console.log('-----', 'field');
      });
      req.pipe(req.busboy);
    }
  })
  .get((req, res) => {
    console.log('-----', 'get');
    res.send('hehehe');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};
