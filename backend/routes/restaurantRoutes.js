const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("This is where all restaurants will be displayed");
});

// router.get("/create", renderCreatePage)
// router.post("/", addNewRestaurant)
// router.delete("/:id", deleteRestaurant)
// router.get("/:id", viewRestaurant)

module.exports = router;
