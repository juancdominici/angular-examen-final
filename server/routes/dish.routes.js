const express = require("express");
const router = express.Router();
const dish = require("../controllers/dish.controller");

router.get("/", dish.getDishes);
router.post("/", dish.setDishes);
router.get("/:id", dish.getDish);
router.put("/:id", dish.editDish);
router.delete("/:id", dish.deleteDish);

module.exports = router;
