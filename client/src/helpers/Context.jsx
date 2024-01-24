import { createContext, useState } from "react";


export const ProductsContext=createContext()

export function ProductsProvider({children}) {

    const [activeCard,setActiveCard]=useState(false)
    const [cart,setCart]=useState([])
    const [categories,setCategories]=useState([])
    const [products,setProducts]=useState([])

    const handleCar=()=>{
        setActiveCard(!activeCard)
    }

    const handleCart=(e)=>{

        const existing = cart.findIndex(cartProduct=>cartProduct.name==e.name)

        if (existing>=0) {
            
            const cartLocal=JSON.parse(window.localStorage.getItem('cart'))
            cartLocal[existing].quantity+=1
            window.localStorage.setItem('cart',JSON.stringify([...cartLocal]))
            return setCart(cart=>[...cartLocal])
        }
        window.localStorage.setItem('cart',JSON.stringify([...cart,{name:e.name,category:e.category.name,price:e.price,quantity:1}]))
        setCart(cart=>[...cart,{name:e.name,category:e.category.name,price:e.price,quantity:1}])
    }

    return(
        <ProductsContext.Provider value={{categories,setCategories,products,setProducts,cart,setCart,handleCar,activeCard,setActiveCard,handleCart}}>
            {children}
        </ProductsContext.Provider>

    )

}