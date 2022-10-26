import TestModel from "../models/test.model.js";

export const createName = async (req, res, next) => {
  console.log("post");
  const { testName } = req.body;
  // const name = "praveen";

  try {
    console.log("line 8");
    const data = await TestModel.save(testName);
    console.log("line 10");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("cannot post");
  }
};

export const getName = async (req, res, next) => {
  try {
    const data = await TestModel.find();
    res.status(200).json(data);
  } catch (error) {
    // console.log(error);
    res.status(400).json("cannot get");
  }
};
