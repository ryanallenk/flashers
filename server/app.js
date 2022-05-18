// declarations
require("dotenv").config();
const { PORT, ENVIRONMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // cors require
const bodyParser = require("body-parser");
// db connection
const db = require("./configs/db.config");

// routes import
const flasherRoutes = require("./routes/flasherRoutes");

const app = express();

// middleware setup
app.use(cors()); // CORS middleware useage
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use("/api", flasherRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
