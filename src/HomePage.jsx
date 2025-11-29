import { GithubHeatmap } from "./Contributions-Table"
import { Header } from "./Header"

export function HomePage() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <mean className="flex gap-6 mt-8 flex-col md:flex-row">
                    <div className="p-4  flex-1 ">
                        <div className="w-45 h-45 md:w-50 md:h-50 border border-neutral-700  lg:w-70 lg:h-70 mx-auto rounded-full overflow-hidden">
                            <img src="/profile.jpeg"
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
                        <button className="mt-6 bg-zinc-900 w-full py-2 border border-neutral-700 rounded-lg">
                            View Resume
                        </button>
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
                    <div className=" flex-3   px-4">
                        <div className="flex  items-center justify-between">
                            <p className="font-bold lg:text-sm xl:text-lg">Projects</p>
                            <p className="lg:text-xs xl:text-sm text-blue-400 ">Customize your pin</p>
                        </div>
                        <div className="grid grid-cols-2   gap-4 mt-2 ">
                            <div className="flex flex-col justify-between h-[120px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-blue-400">Trans-Front</p>
                                        <p className="text-gray-400 text-xs">
                                            Forked from w0rmr/transbadtrip
                                        </p>
                                    </div>
                                    <button className="border text-gray-300 border-neutral-700 px-4 py-1 rounded-2xl text-xs">
                                        Public
                                    </button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-yellow-300"></span>
                                    <p className="text-sm text-gray-300">Javascript</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[120px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-blue-400">Trans-Front</p>
                                        <p className="text-gray-400 text-xs">
                                            Forked from w0rmr/transbadtrip
                                        </p>
                                    </div>
                                    <button className="border text-gray-300 border-neutral-700 px-4 py-1 rounded-2xl text-xs">
                                        Public
                                    </button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-violet-600"></span>
                                    <p className="text-sm text-gray-300">Css</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[100px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between ">
                                    <p className="font-bold text-blue-400 ">FT-IRC </p>
                                    <button className="border text-gray-300 border-neutral-700  px-4 py-1 rounded-2xl text-xs ">Public</button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-red-400"></span>
                                    <p className="text-sm text-gray-300">C++</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[100px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between ">
                                    <p className="font-bold text-blue-400 ">Rock_Paper_Scissors</p>
                                    <button className="border text-gray-300 border-neutral-700  px-4 py-1 rounded-2xl text-xs ">Public</button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-orange-500"></span>
                                    <p className="text-sm text-gray-300">HTML</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[100px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between ">
                                    <p className="font-bold text-blue-400 ">Rock_Paper_Scissors</p>
                                    <button className="border text-gray-300 border-neutral-700  px-4 py-1 rounded-2xl text-xs ">Public</button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-orange-500"></span>
                                    <p className="text-sm text-gray-300">HTML</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[100px] flex-1 rounded-lg border-2 border-neutral-700 p-4  hover:border-neutral-700 transition">
                                <div className="w-full flex items-start justify-between ">
                                    <p className="font-bold text-blue-400 ">Rock_Paper_Scissors</p>
                                    <button className="border text-gray-300 border-neutral-700  px-4 py-1 rounded-2xl text-xs ">Public</button>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="rounded-full w-3 h-3 bg-orange-500"></span>
                                    <p className="text-sm text-gray-300">HTML</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex">
                            <div className="w-[700px] border rounded-tr-lg rounded-tl-lg border-neutral-700 ">
                                <GithubHeatmap username="the-Bandersnatch" />
                            </div>
                            <div className="ml-4 flex flex-col gap-2">
                                <div className="bg-blue-500 px-4 py-2  w-30 rounded-lg text-sm flex justify-start  ">2025</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2024</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2023</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2022</div>
                            </div>
                        </div>
                        <div className="mt-8 w-[700px]">
                            <p>Contribution activity</p>
                            <div className="mt-6 flex items-center gap-2">
                                <p className="text-xs font-bold">November <span className="text-gray-300">2025</span></p>
                                <div className="flex-1 border-b border-neutral-700 "></div>
                            </div>
                            <div className="flex flex-1 mt-4 ">
                                <div className=" flex items-center flex-col flex-1">
                                    <div className="border-l-2 border-neutral-700 h-5"></div>
                                    <img className="rounded-full w-6 h-6 bg-neutral-700 mt-1  p-1" src="/phone.svg" />
                                    <div className="border-l-2 border-neutral-700 mt-1 h-10"></div>
                                    <img className="rounded-full w-6 h-6 bg-neutral-700 mt-1  p-1" src="/phone.svg" />
                                    <div className="border-l-2 mt-1 border-neutral-700 h-10"></div>
                                </div>
                                <div className="flex justify-between mt-4  ml-2  flex-20">
                                    <div className="flex flex-col">
                                        <p className="hover:text-blue-400">Created 7 commits in  1 reposetory</p>
                                        <p className=" mt-2 text-sm underline text-blue-400">Alyoub/EcommerceProject</p>
                                        <p className="hover:text-blue-400 mt-6">Created 7 commits in  1 reposetory</p>
                                        <p className=" mt-2 text-sm underline text-blue-400">Alyoub/EcommerceProject</p>
                                    </div>
                                    <div className="">
                                        <p className="border-4 w-50 mt-8 rounded-xl border-[#216E39]"></p>
                                        <p className="border-4 w-50 mt-14 rounded-xl border-[#216E39]"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-sm text-blue-400 font-bold text-center p-2 border border-neutral-700 rounded-sm">Show more activity</div>
                            <p className="mt-4 text-neutral-400 text-xs"> Seeing something unexpected? Take a look at the <span className="underline text-blue-400">GitHub profile guide.</span></p>
                        </div>
                    </div>
                </mean>
            </div>
        </>

    );
}