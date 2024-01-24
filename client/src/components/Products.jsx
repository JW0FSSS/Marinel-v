import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../helpers/Context"
import {Aside} from "../components/aside"
import { Search } from "../icons/seacrh"
import {Car} from "../icons/car"
import { CartAside } from "./CartAside";
import {Bell} from "../icons/bell"
import { User } from "../icons/user"
import { getProducts } from "../services/products"
import { FavoriteContext } from "../helpers/favoriteContext"
import { UserContext } from "../helpers/userContext"

export function Products() {
    
    const[search,setSearch]=useState('')

    const {setCart,products,setProducts,handleCar,activeCard,handleCart}=useContext(ProductsContext)
    const {handleFavorite}=useContext(FavoriteContext)
    const {user,setUser}=useContext(UserContext)

    const handleSeacrh=(e)=>{
        
        setSearch(e.target.value.toLowerCase())
    }

    
    useEffect(()=>{
        getProducts().then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const cartLocal=window.localStorage.getItem('cart')
        if (cartLocal) {
            const carrito=JSON.parse(cartLocal)
            setCart(carrito)
        }
    },[])

    useEffect(()=>{
        const logged=window.localStorage.getItem('user')
        if (logged) {
            const user=JSON.parse(logged)
            setUser(user)
        }
    },[])

    return(
        <>  
            <Aside />
            <section className="bg-green-950 ml-72 px-10 text-gray-200">
                <header className="flex justify-between items-center pr-14">
                    <div className="flex justify-between w-full mt-5">
                        <div className="relative flex gap-x-1 bg-gray-500 p-2 rounded-md ">
                            <label htmlFor="search" className="absolute top-3"><Search/></label>
                            <input type="text" onChange={handleSeacrh} className=' bg-gray-500 px-2 pl-8' placeholder="Search..." id="search" name="search"/>
                        </div>
                        <div className="flex gap-x-7 items-center">
                            {user?<p>{user.username}</p>:''}
                            {user?<img className="size-12 rounded-full" src={`${user.image}`} alt="" srcset="" />:<User/>}
                            <p><Bell/></p>
                        </div>
                    </div>
                </header>

            <main className="h-full grid grid-cols-4 py-10 gap-x-5 gap-y-10 place-items-center pr-10 ">
                {[{...products[0]}].map(e=>
                            <article className="col-span-4 flex justify-between px-40 w-full bg-teal-900 rounded-xl">
                                <div className="flex flex-col gap-y-10 py-10 items-center">
                                    <h1>{e._id}</h1>
                                    <h1>{e.name}</h1>
                                    <p>{e.description}</p>
                                    <div className="flex gap-5">
                                        <button  className="bg-emerald-700 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleCart(e)}>Add Cart</button>
                                        <button  className="bg-yellow-500 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleFavorite(e,user)}>Add Fvorite</button>
                                    </div>
                                </div>
                                <img className="size-80" src="https://static.vecteezy.com/system/resources/previews/008/530/056/original/black-polo-shirt-mockup-cutout-file-png.png" alt="" />
                            </article>
                    )}

                <div className="col-span-4 w-full flex gap-x-10">
                    <h1>Our products</h1> 
                    <button>Top</button>
                    <button>Popular</button>
                    <button>Most Sold</button>
                </div>
                
                {products.map(e=>
                <article className="flex flex-col items-center gap-y-2 bg-teal-700 rounded-lg pb-8 px-8 hover:border-stone-950">
                    <img className="-mt-6 size-72" src="https://static.vecteezy.com/system/resources/previews/008/530/056/original/black-polo-shirt-mockup-cutout-file-png.png" alt="" />
                    <h1 >{e.name}</h1>
                    <h2 >{e.category.name}</h2>
                    <p >{`$/${e.price}`}</p>
                    <div className="flex gap-5">
                        <button key={e._id} className="bg-emerald-700 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleCart(e)}>Add Cart</button>
                        <button  className="bg-yellow-500 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleFavorite(e,user)}>Add Fvorite</button>
                    </div>
                </article>)}
            </main>
            </section>
            
            <button onClick={handleCar} className="fixed right-4 bottom-4 bg-white rounded-full p-5"><Car/></button>
            {activeCard
            ?<CartAside/>
            :''
            }
        </>
    )
}