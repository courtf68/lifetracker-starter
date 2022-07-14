const express = require("express");
const app = express();
const port = 3001;

const bcrypt = require("bcrypt");
const auth = require("./routes/auth");
const morgan = require("morgan");
const cors = require("cors"); //fixes posty issues

const { NotFoundError } = require("./utils/errors");

app.use(cors()); //remember func
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.json("main LifeTracker backend route works!");
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "not working";
  return res.status(status).json({
    error: { message, status },
  });
});
//err
app.use((req, res, next) => {
  return next(new NotFoundError());
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.post("/", (req, res) => {
//   console.log(req.body); //need another post thing w str?
//   res.send("good");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
