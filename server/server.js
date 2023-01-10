require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));   