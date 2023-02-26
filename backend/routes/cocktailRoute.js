const express = require('express')
const router = express.Router()

const cocktailController = require("../controllers/cocktailController");




router.get("/", cocktailController.cocktail_getAll);

router.get("/:id", cocktailController.cocktail_getAll_Id);

router.post("/", cocktailController.cocktail_post);

router.delete("/:id", cocktailController.cocktail_delete);

router.put("/:id", cocktailController.cocktail_update);




module.exports = router