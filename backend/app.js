const express = require("express");
const morgan = require("morgan");
const mongoose = require("morgan");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(3000);
