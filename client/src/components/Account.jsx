import { useContext, useEffect } from "react"
import { Anchor } from "../icons/anchor"
import { Link } from "react-router-dom"
import { UserContext } from "../helpers/userContext"
import { Navigate } from "react-router-dom"

export function Account() {

    const {user, handleUser,herror,setUser}=useContext(UserContext)

    useEffect(()=>{
        const logged=window.localStorage.getItem('user')
        if (logged) {
            const user=JSON.parse(logged)
            setUser(user)
        }
    },[])

    return(
        <section className="flex flex-col items-center h-screen gap-20  bg-slate-300">
            <div className="mt-60 flex flex-col items-center bg-white py-10 px-20 rounded-lg shadow-2xl">
                <h1 className="text-4xl flex gap-2" ><Anchor/> Marinel</h1>
                {herror.error?<p className="p-1 mt-4 bg-red-500 rounded-md" >{herror.error}</p>:''}
                <form onSubmit={handleUser} className="flex flex-col max-w-lg gap-5 p-10">
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="email" placeholder="user@gmail.com" required name="email"/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="password" placeholder="******" required name="password"/>
                    <button className="bg-emerald-600 rounded-xl text-white mt-4 py-1 px-2" >Sign In</button>
                </form>
                    <Link to='/register' className="text-emerald-600 shadow-2xl hover:border-b-2 hover:border-emerald-600">Create an account</Link>
            </div>
           {user && (<Navigate to='/products' replace={true} />)}

        </section>
    )
} 