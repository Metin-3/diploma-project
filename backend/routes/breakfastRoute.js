const express = require('express')
const router = express.Router()

const breakfastController = require("../controllers/breakfastController");




router.get("/", breakfastController.breakfast_getAll);

router.get("/:id", breakfastController.breakfast_getAll_Id);

router.post("/", breakfastController.breakfast_post);

router.delete("/:id", breakfastController.breakfast_delete);

router.put("/:id", breakfastController.breakfast_update);



module.exports = router