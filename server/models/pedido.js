const mongoose = require("mongoose");
const { Schema } = mongoose;

const PedidoSchema = new Schema({
  mozo: { type: String, required: true },
  mesa: { type: String, required: true },
  nota: { type: String },
  estado: { type: String, required: true },
  total: { type: Number, required: true },
  productos: [
    {
      producto: { type: String, required: true },
      cantidad: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Pedido", PedidoSchema);
