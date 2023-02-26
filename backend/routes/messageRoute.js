const express = require('express')
const router = express.Router()

const messageController = require("../controllers/messageController");




router.get("/", messageController.message_getAll);

router.get("/:id", messageController.message_getAll_Id);

router.post("/", messageController.message_post);

router.delete("/:id", messageController.message_delete);

router.put("/:id", messageController.message_update);




module.exports = router