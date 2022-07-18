const express = require("express");
const router = express.Router();
const Nutrition = require("../models/nutrition");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;
    const nCreds = await Nutrition.listNutrition(id);
    console.log(nCreds);
    return res.status(201).json({ nutrition: nCreds });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;

    const nCreds = req.body;
    console.log(nCreds);
    const nutrition = await Nutrition.PostNutrition(nCreds, id);
    return res.status(201).json({ nutrition: nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
