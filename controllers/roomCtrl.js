import RoomModel from "../models/RoomModel.js";

export const addRoomToDB = async (req, res, next) => {
  try {
    const newRoom = new RoomModel({
      hotelName: req.body.hotelName,
      imageUrl: req.body.imageUrl,
      hotelDesc: req.body.hotelDesc,
      price: req.body.price,
      adultCap: req.body.adultCap,
      sizeCap: req.body.sizeCap,
    });
    await newRoom.save();
    res.status(200).send("new hotel room has been created.");
  } catch (err) {
    next(err);
  }
};

export const UpdateRoomToDB = async (req, res, next) => {
  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const GetAllRooms = async (req, res, next) => {
  try {
    const foods = await RoomModel.find();
    res.status(200).send(foods);
  } catch (err) {
    next(err);
  }
};
export const Getbestrooms = async (req, res, next) => {
  try {
    const foods = await RoomModel.find({ bestRoom: true });
    res.status(200).send(foods);
  } catch (err) {
    next(err);
  }
};
export const DeleteRoom = async (req, res, next) => {
  try {
    await RoomModel.findByIdAndDelete(req.params.id);
    res.status(200).json("item deleted successfuly");
  } catch (err) {
    next(err);
  }
};
