import { Payments } from "../icons/payment";
import { CardAbout } from "./CardAbout";
import { Support } from "../icons/support";
import { Return } from "../icons/return";

export function About() {

    const Abouts=
        {title:'Payment Method',
        description:'We offer flexible payment options, to make easier'
    }

    return(

        <section className="h-screen grid place-items-center " id="about" >
            <div className="h-1/2 w-full flex flex-col justify-center items-center bg-sky-100 text-emerald-800">

                <h1 className="text-4xl">Benefits for you expendiency</h1>

                <div className="grid grid-cols-3 py-16 px-40 gap-20">

                <CardAbout title={Abouts.title} description={Abouts.description}><Payments/></CardAbout>
                <CardAbout title={'Return Policy'} description={'You can return a product within 30days'}><Return/></CardAbout>
                <CardAbout title={'Customers Support'} description={'Our customers is 24/7'}><Support/></CardAbout>
            
                </div>
            </div>
        </section>

    )
}