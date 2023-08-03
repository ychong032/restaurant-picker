require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRoutes");

const app = express();

// Connect to database
mongoose
	.connect(process.env["DB_URI"])
	.then((result) => {
		app.listen(process.env["PORT_NUMBER"], () =>
			console.log(`Listening on port ${process.env.PORT_NUMBER}...`)
		);
	})
	.catch((err) => console.log(err));

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.use("/restaurants", restaurantRouter);
