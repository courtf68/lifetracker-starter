const express = require("express");
const router = express.Router();
const security = require("../security");
const User = require("../models/user");

const { createUserJwt } = require("../utils/tokens");

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);

    return res.status(200).json({ user, token }); //put token back in
  } catch (err) {
    next(err);
  }
});
router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token }); //,token
  } catch (err) {
    next(err);
  }
});
router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);

    const publicUser = User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    next(err);
  }
});
router.post("./sleep/add", async (req, res, next) => {
  try {
    console.log("adding sleep");
  } catch (err) {
    next(err);
  }
});
router.post("./nutrition/add", async (req, res, next) => {
  try {
    console.log("adding nutrition");
  } catch (err) {
    next(err);
  }
});

//ex below
// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });
// // define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page");
// });
// // define the about route
// router.get("/about", (req, res) => {
//   res.send("About birds");
// });

module.exports = router;
//https://expressjs.com/en/guide/routing.html
