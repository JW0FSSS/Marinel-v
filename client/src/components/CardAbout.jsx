

export function CardAbout({children,title,description}) {
    return(
        <div className="flex flex-col gap-y-5 items-center w-60 text-center ">
                {children}
                <h2 className="text-2xl">{title}</h2>
                <p className="text-lg">{description}</p>
        </div>
    )
}