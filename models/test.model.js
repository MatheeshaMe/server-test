import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  testName:{
    type:String
  }
})

const TestModel = mongoose.model("Test",testSchema)
export default TestModel