export function LeftPanel() {
    return (
        <div className="p-4 flex-1 ">
            <div className="w-45 h-45 md:w-50 md:h-50 border border-neutral-700  lg:w-70 lg:h-70 mx-auto rounded-full overflow-hidden">
                <img src="/ME.png"
                    className="w-full h-full object-cover"
                    alt="profile"
                />
            </div>
            <p className="mt-4 font-bold sm:text-xs lg:text-lg xl:text-xl mx-auto">
                Ayoub lotfi
            </p>
            <p className="sm:text-xs lg:text-sm xl:text-xl mx-auto text-neutral-400">
                alyoub
            </p>
            <a href="/Alotfi-CV.pdf" target="_blank">
                <button className="mt-6 hover:bg-gray-800 bg-zinc-900 w-full py-2 border border-neutral-700 rounded-lg">
                    View Resume
                </button>
            </a>
            <div className="py-5 pb-8 flex gap-2 items-center  border-b-2 border-neutral-700">
                <img className="" src="/group-users.png"></img>
                <p className="text-sm text-neutral-400">
                    <span className=" font-bold text-white" >12 </span>
                    followers • <span className=" font-bold text-white" >19 </span> fllowing </p>
            </div>
            <div className="py-5 pb-8 items-center  border-b-2 border-neutral-700">
                <p className="font-bold">Highlights</p>
                <div className="flex mt-2 gap-2 ">
                    <img className="w-5" src="/Star.svg" />
                    <p className="border text-xs border-violet-500 text-violet-500 rounded-xl font-bold px-1 ">
                        PRO
                    </p>
                </div>
            </div>

        </div>
    );
}