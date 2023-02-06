const generateId = require('./generators/generate-id');

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.body.id = generateId();
  }
  next();
}