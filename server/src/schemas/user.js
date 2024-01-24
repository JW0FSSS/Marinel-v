import { Schema, model } from "mongoose";

const userSchema=new Schema({
    username: {
      type: String,
      unique:true,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
        type: String,
        require:true,
        trim: true,
      },
      image:{
        type:String,
      }
  },{timestamps:true});

  export const User= model('User',userSchema)