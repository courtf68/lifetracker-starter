const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Nutrition {
  static async listNutrition(userId) {
    const results = await db.query(
      `SELECT *
      FROM nutrition
      WHERE n_id = $1;`,
      [userId]
    );
    return results.rows;
  }
  static async PostNutrition(nCreds, userId) {
    console.log(nCreds);
    if (nCreds.name === "") {
      throw new BadRequestError("No name here");
    }

    if (nCreds.category === "") {
      throw new BadRequestError("Need a nutrition category ");
    }

    if (nCreds.image === "") {
      throw new BadRequestError("Need to input url");
    }

    if (nCreds.quantity === "") {
      throw new BadRequestError("Nutrition quantity can't be zero");
    }

    if (nCreds.calories === "") {
      throw new BadRequestError("Nutrition calories can't be zero");
    }
    const result = await db.query(
      `
            INSERT INTO nutrition(
                n_name,
                category,
                calories,
                quantity,
                image_url,
                n_id
            )
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING n_name,category,calories,quantity ,image_url, n_id;
            `,
      [
        nCreds.name,
        nCreds.category,
        nCreds.quantity,
        nCreds.calories,
        nCreds.image,
        userId,
      ]
    );
    const ress = result.rows[0];
    return ress;
  }
}

module.exports = Nutrition;
