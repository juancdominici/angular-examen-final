const Pedido = require("../models/pedido");

const pedidoController = {};

pedidoController.getPedidos = async (req, res) => {
  const pedidos = await Pedido.find();
  res.json(pedidos);
};

pedidoController.createPedido = async (req, res) => {
  const pedido = new Pedido(req.body);
  await pedido.save();
  res.json({
    status: "Pedido guardado",
  });
};

pedidoController.actualizarEstadoPedido = async (req, res) => {
  const { id } = req.params;
  const pedido = {
    mozo: req.body.mozo,
    mesa: req.body.mesa,
    nota: req.body.nota,
    estado: req.body.estado,
    total: req.body.total,
    productos: req.body.productos,
  };
  await Pedido.findByIdAndUpdate(id, { $set: pedido }, { new: true });
  res.json({
    status: "Pedido actualizado",
  });
};

pedidoController.borrarPedido = async (req, res) => {
  await Pedido.findByIdAndRemove(req.params.id);
  res.json({ status: "Pedido eliminado" });
};

module.exports = pedidoController;
