import { useContext, useEffect } from "react"
import { CardAside } from "./CardAside"
import { ProductsContext } from "../helpers/Context"
import { getProducts } from "../services/products" 
import { Car } from "../icons/car"

export function Special() {

    const {products,setProducts}=useContext(ProductsContext)
    const special=[{...products[0]}]
    const minicards=[{...products[0]},{...products[1]},{...products[2]}]
    const{handleCart}=useContext(ProductsContext)

    useEffect(()=>{
        getProducts(3).then(data=>setProducts(data))
    },[])

    return(
        <section className="h-screen flex flex-col justify-between items-center py-20" id="special">
            <h1 className="text-4xl text-emerald-700 font-bold">Special Package</h1>
            <section className="px-20 py-20 grid grid-cols-5 ">
                
                {special.map(e=> <main className="col-span-3 px-20 flex flex-col gap-y-10">
                                    <img className="w-90 h-90 px-20 rounded-3xl hover:scale-105 cursor-pointer transition-all duration-200" src="https://previews.123rf.com/images/antoinepham2903/antoinepham29032305/antoinepham2903230500862/204881691-paysage-fantastique-avec-prairie-fantastique-et-illustration-3d-de-la-lune.jpg" alt="" />
                                    <div className="flex flex-col px-20 gap-y-5">
                                        <div className="flex justify-between ">
                                            <h1 className="text-3xl">{e.name}</h1>
                                            <button onClick={()=>handleCart(e)} className="flex gap-x-8 items-center bg-emerald-600 text-white p-4 rounded-md hover:scale-105 cursor-pointer">Add to Cart <Car/></button>
                                        </div>

                                        <span className="text-2xl" >******</span>
                                        <p className="text-2xl">{`$/${e.price}`}</p>
                                    </div>
                                </main>
                    
                    )}

                   
                    <div className="col-span-2 flex flex-col gap-y-8">
                        <h3>Description</h3>
                        {special.map(e=><p>{e.description}</p>)}
                        <p>See More</p>
                        {minicards.map(e=><CardAside name={e.name} price={e.price}/>)}
                        
                        
                    </div>

            </section>
        </section>
    )
}