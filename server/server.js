require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3001;
const db = require("./config/mongoose.config");

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
