const express = require('express')
const router = express.Router()

const instagramController = require("../controllers/instagramController");




router.get("/", instagramController.instagram_getAll);

router.get("/:id", instagramController.instagram_getAll_Id);

router.post("/", instagramController.instagram_post);

router.delete("/:id", instagramController.instagram_delete);

router.put("/:id", instagramController.instagram_update);




module.exports = router