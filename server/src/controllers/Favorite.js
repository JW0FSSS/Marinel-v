import { FavoriteUserIdModel,FavoriteAddModel,FavoriteDeleteModel } from "../models/Favorite.js"



export async function FavoriteUserIdController (req, res) {
    try {
      const {user_id}= req.body
  
      const {favorite} = await FavoriteUserIdModel({user_id})
  
      res.json(favorite )
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }
  
export async function FavoriteAddController (req, res) {
    try {
      const {user_id,product_id}= req.body
  
      const favorite = await FavoriteAddModel({user_id,product_id})
  
      res.json(favorite )
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }

export async function FavoriteDeleteController (req, res) {
    try {
      const {user_id,product_id}= req.body
  
      const favorite = await FavoriteDeleteModel({user_id,product_id})
  
      res.json(favorite )
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }