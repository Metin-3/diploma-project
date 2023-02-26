const express = require('express')
const router = express.Router()

const drinkController = require("../controllers/drinkController");




router.get("/", drinkController.drink_getAll);

router.get("/:id", drinkController.drink_getAll_Id);

router.post("/", drinkController.drink_post);

router.delete("/:id", drinkController.drink_delete);

router.put("/:id", drinkController.drink_update);




module.exports = router