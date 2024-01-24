export function CardAside({name,price}) {
    return(
        <div className="grid grid-cols-6 gap-x-4 ">
                            <div className="col-span-2 hover:scale-105 cursor-pointer">
                                <img  className="object-cover rounded-xl" src="https://www.zdnet.com/a/img/resize/d36e142bd1aa124b869cfb89a70d89d823f44565/2023/12/19/33404002-f49d-4e20-8789-9af8ddcd4da3/photobot.jpg?auto=webp&width=1280" alt="" />
                            </div>
                            <div className="col-span-4 flex flex-col gap-y-2 bg-cyan-100 rounded-lg px-4 py-4 hover:scale-105 cursor-pointer">
                                <div className="flex justify-between">
                                <h3>{name}</h3>
                                <p>{`$/${price}`}</p>
                                </div>
                                <span>******</span>
                                <p>See Details</p>
                            </div>
                        </div>
    )
}