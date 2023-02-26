const express = require('express')
const router = express.Router()

const eventController = require("../controllers/eventsController");




router.get("/", eventController.event_getAll);

router.get("/:id", eventController.event_getAll_Id);

router.post("/", eventController.event_post);

router.delete("/:id", eventController.event_delete);

router.put("/:id", eventController.event_update);




module.exports = router