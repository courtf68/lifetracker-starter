// // const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = require("./config");
// const { UnauthorizedError } = require("./utils/error");

// const jwtFrom = ({ headers }) => {
//   if (headers?.authorization) {
//     const [scheme, token] = headers.authorization.split(" "); //split
//     if (scheme.trim() === "Bearer") {
//       return token;
//     }
//   }
//   return undefined;
// };

// const extractUserFromJwt = (req, res, next) => {
//   try {
//     const token = jwtFrom(req);
//     if (token) {
//       res.locals.user = jwt.verify(token, SECRET_KEY); //verify
//     }
//     return next();
//   } catch (err) {
//     return next();
//   }
// };

// const requireAuthenticatedUser = (req, res, next) => {
//   try {
//     const { user } = res.locals;
//     if (!user?.email) {
//       throw new UnauthorizedError();
//     }
//   } catch (err) {
//     return next(err);
//   }
// };

// module.exports = {
//   requireAuthenticatedUser,
//   extractUserFromJwt,
// };

const bcrypt = require("bcrypt");

const pw = "supersecretpassword";

bcrypt.hash(pw, 6, (err, hashedPw) => {
  console.log(`Password is ${pw}`);
  console.log(`Hashed Password is ${hashedPw}`);
});

console.log(pw);
