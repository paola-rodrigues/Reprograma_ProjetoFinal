const express = require("express");
const router = express.Router();

const controller = require("../controller/usuarioController");

router.get("/all", controller.getAll);

router.post("/create", controller.createUser);

router.put("/update/:id", controller.updateUserById);

router.delete("/delete/:id", controller.deleteUserById);

module.exports = router;
