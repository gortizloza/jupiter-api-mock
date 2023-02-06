const generateImgUrl = require('./generators/generate-img-url');

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.body.image = generateImgUrl();
  }
  next();
}