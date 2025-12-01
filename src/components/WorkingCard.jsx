export function WorkingCard({title, description, status, color, tech, onClick, cursor})
{
    return (
        <div onClick={onClick} style={{cursor : cursor}} className="flex flex-col justify-between h-[120px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
            <div className="w-full flex items-start justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-blue-400 hover:underline">{title}</p>
                    <p className="text-gray-400 text-xs">{description}</p>
                </div>
                <button className="border text-gray-300 border-neutral-700 px-3 py-1 rounded-2xl text-xs">{status}</button>
            </div>
            <div className="flex items-center gap-2">
                <span className="rounded-full w-3 h-3" style={{ background : color }}></span>
                <p className="text-sm text-gray-300">{tech}</p>
            </div>
        </div>
    );
}



export function CardWork({status, title, tech, time, color, onClick, cursor})
{
    return(
        <div onClick={onClick} className="mt-8  pb-8 border-b border-neutral-700 flex" style={{cursor : cursor}}>
                            <div className="flex-1">
                                <div className="flex items-center gap-4" >
                                    <p className="font-bold text-lg text-blue-500 hover:underline">{title}</p>
                                    <button className="text-xs bg-gray-800 px-2  h-6 rounded-full border border-neutral-600">{status}</button>
                                </div>
                                <div className="flex mt-4 items-center gap-2" >
                                    <p className=" w-3 h-3 rounded-full" style={{background : color}}></p>
                                    <p className="text-xs text-neutral-400 font-semibold">{tech}</p>
                                    <p className="text-xs font-semibold text-neutral-400">{time}</p>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-end-safe items-start ">
                                <button className="bg-gray-800 gap-2 items-center h-8 px-2 py-1 border border-neutral-600 rounded-l-sm flex">
                                    <img className="w-4" src="/Star.svg" />
                                    <p className="text-sm">Star</p>
                                </button>
                                <button className="bg-gray-800 gap-2 items-center
                                h-8 px-3 py-1 border border-neutral-600 rounded-r-sm flex">
                                    <img className="w-2" src="/Rectangle.svg" />
                                </button>
                            </div>
                        </div>
    );
}
