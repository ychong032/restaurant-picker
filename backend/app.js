require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Connect to database
mongoose
	.connect(process.env["DB_URI"])
	.then((result) => app.listen(process.env["PORT_NUMBER"]))
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	console.log("Connected to database!");
	res.send("Hello world!");
});
