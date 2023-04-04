import mongoose from "mongoose";
const { Schema } = mongoose;

const FoodSchema = new Schema({
  foodname: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
    enum: ["breakfast", "lunch", "dinner"],
  },
  TodaySpetial: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Foods", FoodSchema);
