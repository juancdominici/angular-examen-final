const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
