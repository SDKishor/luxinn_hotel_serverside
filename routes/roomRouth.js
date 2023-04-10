import express from "express";
import {
  DeleteRoom,
  GetAllRooms,
  Getbestrooms,
  UpdateRoomToDB,
  addRoomToDB,
} from "../controllers/roomCtrl.js";

const router = express.Router();

router.post("/addroom", addRoomToDB);
router.get("/getbestrooms", Getbestrooms);
router.get("/getallrooms", GetAllRooms);
router.put("/updateroom/:id", UpdateRoomToDB);
router.delete("/deleteroom/:id", DeleteRoom);

export default router;
