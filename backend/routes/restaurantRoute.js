const express = require('express')
const router = express.Router()

const restaurantController = require("../controllers/restaurantController");




router.get("/", restaurantController.restaurant_getAll);

router.get("/:id", restaurantController.restaurant_getAll_Id);

router.post("/", restaurantController.restaurant_post);

router.delete("/:id", restaurantController.restaurant_delete);

router.put("/:id", restaurantController.restaurant_update);




module.exports = router