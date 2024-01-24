import { useContext } from "react";
import { Cancel} from "../icons/cancel";
import { ProductsContext } from "../helpers/Context";

export function CartAside() {
   
     const {handleCar,cart} = useContext(ProductsContext)
    

    return(
    <div className={`fixed w-96 h-full right-0 top-0 n bottom-0 bg-black z-50 flex flex-col overflow-y-auto scroll-m-1`}>
        <button onClick={handleCar} className="fixed top-1 right-5 rounded-3xl  bg-red-800 text-white"><Cancel/></button>
        {cart.map(e=>
                <article className="flex flex-col items-center gap-y-2 m-10 py-2 bg-slate-500 rounded-lg ">
                    <img className="-mt-6 size-40" src="https://static.vecteezy.com/system/resources/previews/008/530/056/original/black-polo-shirt-mockup-cutout-file-png.png" alt="" />
                    <h1>{e.name}</h1>
                    <h2>{e.category.name}</h2>
                    <p>{`${e.price}`}</p>
                    <p>{`cantidad:${e.quantity}`}</p>
            </article>)}
    </div>
)
}