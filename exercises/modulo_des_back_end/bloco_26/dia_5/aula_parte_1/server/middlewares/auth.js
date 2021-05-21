module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    return next();
  }

  next({ status: 401, message: "No authorization !" });
}





// module.exports = (req, res, next) => {
//   if (req.query.user === 'batata') {
//     req.user = {
//       name: 'batata'
//     }

//     return next();
//   }

//   next({ status: 401, message: "your are not btata" });
// }
