const express = require('express')
const router = express.Router()

const dinnerController = require("../controllers/dinnerController");




router.get("/", dinnerController.dinner_getAll);

router.get("/:id", dinnerController.dinner_getAll_Id);

router.post("/", dinnerController.dinner_post);

router.delete("/:id", dinnerController.dinner_delete);

router.put("/:id", dinnerController.dinner_update);



module.exports = router