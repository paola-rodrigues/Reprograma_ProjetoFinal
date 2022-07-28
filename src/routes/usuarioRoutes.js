const express = require("express");
const router = express.Router();

const controller = require("../controller/usuarioController");
// const catadorController = require("../controllers/catadorController");

// const { checkAuth } = require("../middlewares/auth");

router.get("/all", controller.getAll);

router.post("/create", controller.createUser);

router.post('/update:id', controller.updateUserById);

router.delete("/delete/:id", controller.deleteUserById);

module.exports = router;
