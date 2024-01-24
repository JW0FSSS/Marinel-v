import { Schema, model } from "mongoose";

const productSchema=new Schema({
    name: {
      type: String,
      unique:true,
      required: true,
    },
    description: {
      type: String,
      lowercase: true,
      trim: true,
    },
    quantity: {
        type: Number,
        min:0
      },
    price: {
        type: Number,
        min:0
      },
      image:{
        type:String,
      },
      category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }
  },{timestamps:true});

  export const Product= model('Product',productSchema)