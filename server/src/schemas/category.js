import { Schema, model } from "mongoose";

const categorySchema=new Schema({
  name: {
    type: String,
    require:true,
    unique:true
  },
  },{timestamps:true});

  export const Category= model('Category',categorySchema)