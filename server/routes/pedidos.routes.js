const express = require("express");
const router = express.Router();

const pedidoController = require("../controllers/pedido.controller.js");

// Pedidos routes
router.get("/", pedidoController.getPedidos);
router.post("/", pedidoController.createPedido);
router.put("/:id", pedidoController.actualizarEstadoPedido);
router.delete("/:id", pedidoController.borrarPedido);

module.exports = router;
