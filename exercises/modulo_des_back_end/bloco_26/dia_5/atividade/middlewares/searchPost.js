const posts = require('../data');

module.exports = (req, res, next) => {
  if(!req.query.id) return next();
  const { id } = req.query;
  console.log(id);
  const results = posts.find((el) => el.id === Number(id));
  console.log(results);
  if(results) {
    return res.status(200).json(results);
  }
  console.log("aqui");
  next({ "status": 204, "message": "ID not found" });
}
