const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./config");
const { UnauthorizedError } = require("./utils/errors");

const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    console.log(typeof headers.authorization);
    // spilting the authorization from the scheme to token
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};

const extractUserFromJwt = (req, res, next) => {
  try {
    const token = jwtFrom(req);
    if (token) {
      console.log("My token is:" + token);
      res.locals.user = jwt.verify(token, SECRET_KEY);
      // verifing if it is a valid token , if so will attach it to local user
    }
    console.log(res.locals.user);
    return next();
  } catch (error) {
    console.log(error);
    return next();
  }
};

// verfiy an authed user exists
const requireAuthenticatedUser = (req, res, next) => {
  try {
    const { user } = res.locals;
    console.log(user);
    if (!user?.email) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  requireAuthenticatedUser,
  extractUserFromJwt,
  jwtFrom,
};

const bcrypt = require("bcrypt");

const pw = "supersecretpassword";

bcrypt.hash(pw, 6, (err, hashedPw) => {
  console.log(`Password is ${pw}`);
  console.log(`Hashed Password is ${hashedPw}`);
});

console.log(pw);
