const express = require('express')
const router = express.Router()

const shopController = require("../controllers/shopController");




router.get("/", shopController.shop_getAll);

router.get("/:id", shopController.shop_getAll_Id);

router.post("/", shopController.shop_post);

router.delete("/:id", shopController.shop_delete);

router.put("/:id", shopController.shop_update);




module.exports = router