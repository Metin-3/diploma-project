const express = require('express')
const router = express.Router()

const boothController = require("../controllers/boothController");




router.get("/", boothController.booth_getAll);

router.get("/:id", boothController.booth_getAll_Id);

router.post("/", boothController.booth_post);

router.delete("/:id", boothController.booth_delete);

router.put("/:id", boothController.booth_update);




module.exports = router