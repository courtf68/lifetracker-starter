const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");
const db = new Client({ connectionString: getDatabaseUri() });
// console.log(getDatabaseUri);
db.connect((err) => {
  if (err) {
    console.error("connection error".red, err.stack);
  } else {
    console.log("connected to postgres db".blue);
  }
});

module.exports = db;

//check whole file, de lab
