import mongo from '../../server/mongo';
import nextConnect from 'next-connect';

export default nextConnect().get(async (req, res) => {
  res.redirect('yandex.ru');
});
