export function WorkingCard({title, description, status, color, tech, onClick})
{
    return (
        <div onClick={onClick} className="flex  flex-col justify-between h-[120px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
            <div className="w-full flex items-start justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-blue-400 hover:underline">{title}</p>
                    <p className="text-gray-400 text-xs">{description}</p>
                </div>
                <button className="border text-gray-300 border-neutral-700 px-4 py-1 rounded-2xl text-xs">{status}</button>
            </div>
            <div className="flex items-center gap-2">
                <span className="rounded-full w-3 h-3" style={{ background : color }}></span>
                <p className="text-sm text-gray-300">{tech}</p>
            </div>
        </div>
    );
}
