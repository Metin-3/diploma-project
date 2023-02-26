const express = require('express')
const router = express.Router()

const tableController = require("../controllers/galleryTableController");




router.get("/", tableController.table_getAll);

router.get("/:id", tableController.table_getAll_Id);

router.post("/", tableController.table_post);

router.delete("/:id", tableController.table_delete);

router.put("/:id", tableController.table_update);




module.exports = router