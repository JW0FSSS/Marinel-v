import { createContext, useState } from "react";
import { account} from "../services/login";


export const UserContext=createContext()

export function UserProvider({children}) {

    const [user,setUser]=useState()
    const [herror,setHerror]=useState({error:''})

    const handleUser=(e)=>{
        e.preventDefault()
        const userData = {email:e.target.email.value,password:e.target.password.value,}
        
        account({userData})
        .then(data=>{
            if(data.error) return setHerror({...herror,error:data.error})
            window.localStorage.setItem('token',JSON.stringify(data.token))
            window.localStorage.setItem('user',JSON.stringify(data.user))
            setUser({...user,...data.user})
         })
    }

    return(

        <UserContext.Provider value={{user,setUser,handleUser,herror}}>
            {children}
        </UserContext.Provider>
)
}