const express = require('express')
const router = express.Router()

const blogController = require("../controllers/blogController");




router.get("/", blogController.blog_getAll);

router.get("/:id", blogController.blog_getAll_Id);

router.post("/", blogController.blog_post);

router.delete("/:id", blogController.blog_delete);

router.put("/:id", blogController.blog_update);




module.exports = router