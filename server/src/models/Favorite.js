import {Types} from "mongoose"
import { Favorite } from "../schemas/favorite.js"


    export async function FavoriteUserIdModel({user_id}) {
        try {
            const favorite = await Favorite.findOne({user_id}).populate('product_id')
            return {favorite}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }

    export async function FavoriteAddModel({user_id,product_id}) {
        try {
            const favorite = await Favorite.findOne({user_id})
            if (favorite) {
                
                favorite.product_id=[...favorite.product_id,product_id]
                await favorite.save()

                return favorite
            }

            const newFavorite= new Favorite({
                user_id,
                product_id:[product_id]
            })

            await newFavorite.save()

            return newFavorite
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }

    export async function FavoriteDeleteModel({user_id,product_id}) {
        try {
            const favorite = await Favorite.findOne({user_id})
            
            if (!favorite) return {error:'no encontrado'}

            const favorites = [...favorite.product_id]

            const product= new Types.ObjectId(product_id)

            favorite.product_id=favorites.filter(e=>!e.equals(product))

            await favorite.save()

            return favorite
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }
    

     



