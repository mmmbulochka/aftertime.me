import mongo from '../../server/mongo';
import nextConnect from 'next-connect';

export default nextConnect().get(async (req, res) => {
  await mongo.client.connect();
  res.redirect('yandex.ru');
  // res.send('hohp');
});
