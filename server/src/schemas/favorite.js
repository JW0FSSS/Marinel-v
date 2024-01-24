import { Schema, model } from "mongoose";

const favoriteSchema=new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
    product_id: [{
      type: Schema.Types.ObjectId,
      ref:'Product'
    }],
   
  },{timestamps:true});

  export const Favorite= model('Favorite',favoriteSchema)