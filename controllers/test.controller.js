import TestModel from "../models/test.model.js";

export const createName = (req, res, next) => {
  const { nameP } = req.body;

  try {
    const name = TestModel.save(nameP);
    res.status(200).json(name);
  } catch (error) {
    // next(error)
    res.status(400).json("cannot post");
  }
};

export const getName = async (req, res, next) => {
  try {
    await TestModel.find();
  } catch (error) {
    // console.log(error);
    res.status(400).json("cannot get");
  }
};
