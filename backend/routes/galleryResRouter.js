const express = require('express')
const router = express.Router()

const resController = require("../controllers/galleryResController");




router.get("/", resController.res_getAll);

router.get("/:id", resController.res_getAll_Id);

router.post("/", resController.res_post);

router.delete("/:id", resController.res_delete);

router.put("/:id", resController.res_update);




module.exports = router