import { Link, NavLink } from "react-router-dom"
import { Anchor } from "../icons/anchor"
import { User } from "../icons/user"
import { Car } from "../icons/car"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../helpers/Context"
import { CartAside } from "./CartAside"
import { UserContext } from "../helpers/userContext"


export function Header() {

    
    const {handleCar,activeCard} = useContext(ProductsContext)
    const {user,setUser} = useContext(UserContext)
    
    useEffect(()=>{
        const logged=window.localStorage.getItem('user')
        if (logged) {
            const user=JSON.parse(logged)
            setUser(user)
        }
    },[])

    return(
        <header className="w-full flex justify-between items-center px-32 py-8 text-cyan-900 text-lg font-medium">
            <Link to='/' ><Anchor/></Link>
            <nav className="flex gap-32">
                <div className="flex items-center gap-10">
                <NavLink to='/' className={({ isActive }) =>isActive ? "border-b-2 border-cyan-900 transition-all duration-100" : "hover:border-b-2 border-cyan-900 transition-all duration-100"}>Home</NavLink>
                <NavLink to='/products' className={({ isActive }) =>isActive ? "border-b-2 border-cyan-900 transition-all duration-100" : "hover:border-b-2 border-cyan-900 transition-all duration-100"} >Products</NavLink>
                </div>
                <div className="flex items-center gap-10">
                <a href='/#categories' className="hover:border-b-2 border-cyan-900 transition-all duration-100 cursor-pointer" >Categories</a>
                <a href='/#special' className="hover:border-b-2 border-cyan-900 transition-all duration-100 cursor-pointer" >Special</a>
                <a href='/#about' className="hover:border-b-2 border-cyan-900 transition-all duration-100 cursor-pointer" >About</a>
                </div>
            </nav>
            <div className="flex gap-10 items-center">
                <Link to='/cart'>
                    <Car/>
                </Link>
  
                
                <Link to='/account'>{user?<img className="size-12 rounded-full" src={`${user.image}`} alt="" srcset="" />:<User/>}</Link>
            </div>
            
        </header>
    )
}