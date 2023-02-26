const express = require('express')
const router = express.Router()

const cartController = require("../controllers/cartController");




router.get("/", cartController.cart_getAll);

router.get("/:id", cartController.cart_getAll_Id);

router.post("/", cartController.cart_post);

router.delete("/:id", cartController.cart_delete);

router.put("/:id", cartController.cart_update);




module.exports = router