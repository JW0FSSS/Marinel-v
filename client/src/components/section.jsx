import { Link } from "react-router-dom"

export function Section() {
    return(
    <section className='relative left-0 right-0 top-0 h-screen w-full ' >

        <div className="relative top-40 left-32 bg-white bg-opacity-80 text-black  w-1/3 flex flex-col gap-14 p-12 rounded-3xl">

            <h1 className="text-5xl text-cyan-900 font-bold font-mono">Exclusive Deals of Furniture Collection</h1>
            <p className="font-mono text-lg">Explore differents categories. Find the best clothes</p>

            <div className="">
                <Link to='/products' className="bg-teal-600 text-gray-100 text-md px-10 py-5 rounded-lg hover:bg-black transition-all duration-200" >Shop Now</Link>
            </div>
        </div>
    </section>
    )
}   