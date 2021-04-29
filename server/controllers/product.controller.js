const Product = require("../models/product");

const productController = {};

productController.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

productController.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({
    status: "Producto añadido",
  });
};

module.exports = productController;
