const express = require('express')
const router = express.Router()

const chefController = require("../controllers/chefController");




router.get("/", chefController.chef_getAll);

router.get("/:id", chefController.chef_getAll_Id);

router.post("/", chefController.chef_post);

router.delete("/:id", chefController.chef_delete);

router.put("/:id", chefController.chef_update);



module.exports = router