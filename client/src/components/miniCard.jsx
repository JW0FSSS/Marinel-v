export function MiniCard({title,valor}) {


    return(
        <div className="flex flex-col gap-y-4">
                <h2>{title}</h2>
                
                <div className="flex flex-col gap-y-2">
                    {valor.map((e)=><p>{e}</p>)}
                    
                </div>
            </div>
    )
}