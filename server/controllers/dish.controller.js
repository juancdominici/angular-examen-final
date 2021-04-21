const Dish = require("../models/dish");
const dishController = {};

dishController.getDishes = async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
};
dishController.setDishes = async (req, res) => {
  const dish = new Dish(req.body);
  await dish.save();
  res.json({
    status: "Plato guardado",
  });
};
dishController.getDish = async (req, res) => {
  const dish = await Dish.findById(req.params.id);
  res.json(dish);
};
dishController.editDish = async (req, res) => {
  const { id } = req.params;
  const dish = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  await Dish.findByIdAndUpdate(id, { $set: dish }, { new: true });
  res.json({
    status: "Plato actualizado",
  });
};
dishController.deleteDish = async (req, res) => {
  const { id } = req.params;
  await Dish.findByIdAndRemove(id);
  res.json({
    status: "Plato eliminado",
  });
};

module.exports = dishController;
