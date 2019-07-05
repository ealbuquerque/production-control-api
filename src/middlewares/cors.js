export default (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Cache-Control, Content-Type, Origin, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  next();
};
