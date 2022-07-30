const express = require("express");
const router = express.Router();

const controller = require("../controller/localDescarteController");

router.post("/create", controller.createLocal);

router.get("/all", controller.getAll);

router.get("/filtrar/:id", controller.localById);

router.put("/update/:id", controller.updateLocalById);

router.delete("/delete/:id", controller.deleteLocalById);

module.exports = router;
