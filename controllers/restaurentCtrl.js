import FoodModel from "../models/FoodModel.js";

export const addFoodToDB = async (req, res, next) => {
  try {
    const newfood = new FoodModel({
      foodname: req.body.foodname,
      imageUrl: req.body.imageUrl,
      foodType: req.body.foodType,
    });
    console.log(newfood);
    await newfood.save();
    res.status(200).send("new food item has been created.");
  } catch (err) {
    next(err);
  }
};

export const UpdateFoodToDB = async (req, res, next) => {
  try {
    const updatedFood = await FoodModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFood);
  } catch (err) {
    next(err);
  }
};

export const DeleteFood = async (req, res, next) => {
  try {
    await FoodModel.findByIdAndDelete(req.params.id);
    res.status(200).json("item deleted successfuly");
  } catch (err) {
    next(err);
  }
};

export const GetFoodByCatagory = async (req, res, next) => {
  try {
    const foods = await FoodModel.find({ foodType: req.params.catagory });
    res.status(200).send(foods);
  } catch (err) {
    next(err);
  }
};

export const GetAllFoods = async (req, res, next) => {
  try {
    const foods = await FoodModel.find();
    res.status(200).send(foods);
  } catch (err) {
    next(err);
  }
};
