import {Link} from 'react-router-dom'


export function Card({name,id}) {

    return(      
        <article className="relative cursor-pointer overflow-hidden w-full h-64 hover:scale-105 hover:z-30 transition-all duration-300">
            <Link to={`/products/${id}`} className='w-full [&>div]:hover:top-20 [&>img]:hover:opacity-60 '>
                <img  className="object-cover w-full rounded-xl " src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />
                <div className="absolute -top-full left-1/3 text-emerald-950 z-10 ">
                <p className="text-5xl font-semibold">{name}</p> 
                <button className="relative left-10 py-3 my-10 px-8 rounded-md bg-cyan-100 text-emerald-700">Explore</button>
                </div>
            </Link>
        </article>
    )
}