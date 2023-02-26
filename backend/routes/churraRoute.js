const express = require('express')
const router = express.Router()

const churraController = require("../controllers/churraController");




router.get("/", churraController.churra_getAll);

router.get("/:id", churraController.churra_getAll_Id);

router.post("/", churraController.churra_post);

router.delete("/:id", churraController.churra_delete);

router.put("/:id", churraController.churra_update);




module.exports = router