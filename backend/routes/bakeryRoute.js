const express = require('express')
const router = express.Router()

const bakeryController = require("../controllers/bakeryController");




router.get("/", bakeryController.bakery_getAll);

router.get("/:id", bakeryController.bakery_getAll_Id);

router.post("/", bakeryController.bakery_post);

router.delete("/:id", bakeryController.bakery_delete);

router.put("/:id", bakeryController.bakery_update);




module.exports = router