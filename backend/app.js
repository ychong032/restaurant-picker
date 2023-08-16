require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRoutes");

const app = express();

const port =
	process.env.NODE_ENV === "production"
		? process.env.PORT || 3000
		: process.env.DEV_PORT;
const hostname =
	process.env.NODE_ENV === "production"
		? process.env.HOST || "0.0.0.0"
		: "localhost";

// Connect to database
mongoose
	.connect(process.env.MONGODB_URI)
	.then((result) => {
		app.listen(port, hostname, () =>
			console.log(`Listening on port ${hostname}:${port}...`)
		);
	})
	.catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/restaurants", restaurantRouter);

app.get("/", (req, res) => {
	res.send("This is the server for Restaurant Picker");
	res.end();
});
