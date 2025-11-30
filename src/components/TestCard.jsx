
export  function Testcard()
{
    return (
        <div className="cursor-not-allowed flex flex-col justify-between h-[100px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
            <div className="w-full flex items-start justify-between ">
                <p className="font-bold text-neutral-500 ">Test</p>
                <button className="border text-gray-300 border-neutral-700  px-4 py-1 rounded-2xl text-xs ">Public</button>
            </div>
            <div className="flex items-center gap-2">
                <span className="rounded-full w-3 h-3 bg-orange-900"></span>
                <p className="text-sm text-neutral-500">x</p>
            </div>
        </div>
    )
}