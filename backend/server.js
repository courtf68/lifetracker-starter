const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const cors = require("cors"); //fixes posty issues
const auth = require("./routes/auth");

app.use(cors()); //remember func
app.use(morgan("tiny"));
app.use(express.json());
app.use("auth", auth);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log(req.body); //need another post thing w str?
  res.send("good");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
