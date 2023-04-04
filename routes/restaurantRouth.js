import express from "express";
import {
  DeleteFood,
  GetAllFoods,
  GetFoodByCatagory,
  UpdateFoodToDB,
  addFoodToDB,
} from "../controllers/restaurentCtrl.js";

const router = express.Router();

router.post("/addfood", addFoodToDB);
router.get("/getfood/:catagory", GetFoodByCatagory);
router.get("/getallfood", GetAllFoods);
router.put("/updatefood/:id", UpdateFoodToDB);
router.delete("/deletefood/:id", DeleteFood);

export default router;
