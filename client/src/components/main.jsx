import { useContext, useEffect } from "react";
import { Card } from "./card";
import { ProductsContext } from "../helpers/Context";
import { getCategories } from "../services/categories";

export function Main() {

    const {categories,setCategories}=useContext(ProductsContext)

    useEffect(()=>{
   
        getCategories(6).then(data=>setCategories(data))
        
    },[])

    return(
        <main className="h-screen" id="categories">
            <h1 className="text-center text-5xl text-emerald-800 font-bold py-10">Explore By Category</h1>
            <section className=" grid grid-cols-2 place-items-center h-5/6 gap-x-3 px-40">
                {categories.map(e=><Card key={e._id} name={e.name} id={e._id} ></Card>)}
            </section>
        </main>
    )
}