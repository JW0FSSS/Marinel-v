import { Categories } from "./categories";
import {Search} from '../icons/seacrh'
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Anchor } from "../icons/anchor";
import { User } from "../icons/user";
import {Heart} from "../icons/heart"

export function Aside({search}) {

    

    

    return(
        <aside className="fixed flex flex-col pl-20 gap-y-20 py-5 w-72 top-0 left-0 bottom-0 bg-teal-950 text-gray-200 ">
                    
                <Link to='/' className="flex gap-3 items-center" ><Anchor/> Marinel</Link>
                
                <nav className="flex flex-col gap-y-5">
                    <Link to='/profile' className="flex gap-3 items-center"><User/>Profile</Link>
                    <label htmlFor="search" className="flex gap-3 items-center cursor-pointer"><Search/> <span>Search</span></label>
                    <Link to='/favorite' className="flex gap-3 items-center"><Heart/>Favorite</Link>
                </nav>

                <div className="flex flex-col gap-y-8 ">
                    <h1>Category</h1>
                    <Categories search={search}/>
                </div>
                <div>

                </div>
                <div className="flex flex-col gap-y-5">
                    <p>Help</p>
                    <p>Conditions</p>
                    <p>Confidentiality</p>
                </div>
                    
        </aside>
    )
}