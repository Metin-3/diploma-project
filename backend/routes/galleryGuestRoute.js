const express = require('express')
const router = express.Router()

const guestController = require("../controllers/galleryGuestController");




router.get("/", guestController.guest_getAll);

router.get("/:id", guestController.guest_getAll_Id);

router.post("/", guestController.guest_post);

router.delete("/:id", guestController.guest_delete);

router.put("/:id", guestController.guest_update);




module.exports = router