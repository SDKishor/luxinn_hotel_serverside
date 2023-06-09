import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";
import { createError } from "../utilities/createError.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newuser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newuser.save();
    res.status(200).send("user has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });
    if (!user) return next(createError(404, "user not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send({ otherDetails, isAdmin });
  } catch (err) {
    next(err);
  }
};
