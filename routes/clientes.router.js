const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller");

router.post("/", clientesController.create);
module.exports = router;