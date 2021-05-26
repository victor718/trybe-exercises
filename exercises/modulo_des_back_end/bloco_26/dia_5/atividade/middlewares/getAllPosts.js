const posts = require('../data');

module.exports = (req, res) => {
  return res.status(200).json(posts);
}
