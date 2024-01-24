import { useContext, useEffect } from "react"
import { ProductsContext } from "../helpers/Context";
import { getCategories } from "../services/categories";
import {Heart} from "../icons/heart"

export  function Categories() {
        
        const {categories,setCategories}=useContext(ProductsContext)
        
    useEffect(()=>{
        getCategories().then((data)=>setCategories(data))
    },[])

    return(
        <div className="flex flex-col gap-3">

                {
                categories.map(e=><h2 key={e._id} className="flex gap-3"><Heart/> {e.name}</h2>)
                }
        </div>
    )
}