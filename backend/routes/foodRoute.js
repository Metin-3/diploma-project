const express = require('express')
const router = express.Router()

const foodController = require("../controllers/foodController");




router.get("/", foodController.food_getAll);

router.get("/:id", foodController.food_getAll_Id);

router.post("/", foodController.food_post);

router.delete("/:id", foodController.food_delete);

router.put("/:id", foodController.food_update);




module.exports = router