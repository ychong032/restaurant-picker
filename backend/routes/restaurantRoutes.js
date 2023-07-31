const express = require("express");
const restaurantController = require("../controllers/restaurantController");

const router = express.Router();

router.get("/", restaurantController.getRestaurants);
router.post("/", restaurantController.createRestaurant);
router.get("/:id", restaurantController.getRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);
router.patch("/:id", restaurantController.updateRestaurant);

module.exports = router;
