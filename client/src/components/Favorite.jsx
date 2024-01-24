import { useContext, useEffect } from "react"
import { favoriteAll } from "../services/favorite"
import { FavoriteContext } from "../helpers/favoriteContext"
import { UserContext } from "../helpers/userContext"

export function Favorite() {

    const {setUser}=useContext(UserContext)
    const {favorite,setFavorite}=useContext(FavoriteContext)

    useEffect(()=>{
        const logged=window.localStorage.getItem('user')
        if (logged) {
            const user=JSON.parse(logged)
            setUser(user)
        }
    },[])

    useEffect(()=>{
        const logged=window.localStorage.getItem('user')
        if (logged) {
            const user=JSON.parse(logged)
            favoriteAll({user}).then(data=>setFavorite(data.product_id))
        }
        
    },[])
 
   


    return(
        <section className="grid  gap-20 place-items-center px-20 py-10">

            <h1 className="">Favorite</h1>
            <main className="grid grid-cols-4 gap-10">
                {!favorite?(<h1>no tienes productos fav</h1>):
                favorite.map(e=>
                <article className="flex flex-col items-center justify-between gap-y-2  rounded-lg p-8 bg-teal-700">
                    <img className="-mt-6 size-40" src="https://static.vecteezy.com/system/resources/previews/008/530/056/original/black-polo-shirt-mockup-cutout-file-png.png" alt="" />
                    <h1 >{e.name}</h1>
                    <h2 >{e.category.name}</h2>
                    <p >{`$/${e.price}`}</p>
                    <div className="flex gap-5">
                        <button className="bg-yellow-500 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleCart(e)}>Add Cart</button>
                    </div>
                </article>)}
            </main>
        </section>

    )
}