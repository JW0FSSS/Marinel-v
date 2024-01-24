
import { Anchor } from "../icons/anchor";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Linkedin } from "../icons/linkedin";
import { Email } from "../icons/Email";
import { Whatssap } from "../icons/whatssap";
import { MiniCard } from "./miniCard";

export function Footer() {
    return(

        <footer className="h-full py-10 px-28 mt-10 bg-gray-200">
            <div className="grid grid-cols-6 my-10">

            <div className="col-span-2 flex flex-col gap-y-3">
                <div className="flex gap-x-2 items-center">
                    <Anchor/>
                    <p>MARINEL</p>
                </div>
                <div className="flex gap-x-5">
                    <Facebook/>
                    <Instagram/>
                    <Linkedin/>
                    <Email/>
                    <Whatssap/>
                </div>
                <p>Address</p>
                <p>+123 456 789</p>
                <p>875 S.J.M, LIMA</p>
                <p>12639, PERU</p>
            </div>
            <MiniCard title={'My account'} valor={['Sign in','Register','Order status']}/>
            <MiniCard title={'Help'} valor={['Sign in','Register','Order status']}/> 
            <MiniCard title={'Shop'} valor={['Sign in','Register','Order status']}/>
            <MiniCard title={'Legal Stuff'} valor={['Sign in','Register','Order status']}/>
            </div>
            <p>Copyright @2024 Marinel.All Rigths Reserved</p>
        </footer>

    )
}