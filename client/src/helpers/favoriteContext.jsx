import { createContext, useState } from "react";
import { favoriteAdd } from "../services/favorite";


export const FavoriteContext=createContext()

export function FavoriteProvider({children}) {
    
    const [favorite, setFavorite]=useState([])

    const handleFavorite=(e,user)=>{
        const product_id=e._id
        const user_id=user._id

        favoriteAdd({user_id,product_id})
    }

    return (
        <FavoriteContext.Provider value={{favorite,setFavorite,handleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )

}