import { useContext, useEffect } from "react"
import { ProductsContext } from "../helpers/Context"

export function CartPage() {

    const {cart,setCart}=useContext(ProductsContext)
    let total=0
    useEffect(()=>{
        const cartLocal=window.localStorage.getItem('cart')
        if (cartLocal) {
            const carrito=JSON.parse(cartLocal)
            setCart(carrito)
        }
    },[])

    return(
        <section className="grid grid-cols-6 mx-auto max-w-[800px] h-screen gap-10">  
            <div className="col-span-4 flex flex-col gap-y-10 mt-20">

                {cart.map(e=>
                    <article className="flex items-center justify-between gap-y-2  rounded-lg px-8 bg-teal-700">
                    <img className="-mt-6 size-40" src="https://static.vecteezy.com/system/resources/previews/008/530/056/original/black-polo-shirt-mockup-cutout-file-png.png" alt="" />
                    <h1 >{e.name}</h1>
                    <h2 >{e.category.name}</h2>
                    <p >{`$/${e.price}`}</p>
                    <div className="flex gap-5">
                        <button key={e._id} className="bg-yellow-500 rounded-md py-1 px-3 text-gray-200" onClick={()=>handleCart(e)}>Add Fvorite</button>
                    </div>
                </article>)}
                
            </div>
            <div className="col-span-2 bg-slate-200 mt-20 max-h-96 flex flex-col items-center rounded-xl">
                    <h1>total</h1>
                    {cart.map(e=>{
                        total+=e.price*e.quantity})}
                        <p>
                        {total}
                        </p>
            </div>
        </section>
    )
}