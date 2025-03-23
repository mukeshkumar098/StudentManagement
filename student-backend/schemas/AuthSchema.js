import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    name:{type:String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  export const userModel=mongoose.model("User",userSchema)