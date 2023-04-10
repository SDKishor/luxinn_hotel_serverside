import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  hotelDesc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  adultCap: {
    type: Number,
    required: true,
  },
  sizeCap: {
    type: Number,
    required: true,
  },
  bestRoom: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("rooms", roomSchema);
