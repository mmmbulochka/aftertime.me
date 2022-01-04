function test(req, res) {
  res.status(200).json({name: 'robbin 12323', age: 55});
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '30mb', // Set desired value here
    },
  },
};

export default test;
