const express = require("express");
const router = express.Router();

const controller = require("../controller/localDescarteController");

router.get("/all", controller.getAll);

router.post("/create", controller.createLocal);

router.put("/update/:id", controller.updateLocalById);

router.delete("/delete/:id", controller.deleteLocalById);

module.exports = router;