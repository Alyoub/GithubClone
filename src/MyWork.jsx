import { Header } from "./Header"
import { LeftPanel } from "./components/LeftPanel";
import { Input } from "/src/components/ui/input"

export function MyWork() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <mean className="flex gap-6 mt-8 flex-col md:flex-row">
                    <LeftPanel />
                    <div className="flex-2">
                        <div className="border-b pb-4 border-neutral-700 px-4 gap-2 items-center flex ">
                            <Input className="w-80 border-neutral-500" type="email" placeholder="Find a repository" />
                            <button className="bg-gray-800 gap-4 items-center px-4 h-8 border border-neutral-600 rounded-sm flex">
                                <p className="text-sm font-semibold">Type</p>
                                <img className="w-2" src="/Rectangle.svg" />
                            </button>
                            <button className="bg-gray-800 gap-4 items-center px-4 h-8 border border-neutral-600 rounded-sm flex">
                                <p className="text-sm font-semibold">language</p>
                                <img className="w-2" src="/Rectangle.svg" />
                            </button>
                            <button className="bg-gray-800 gap-4 items-center px-4 h-8 border border-neutral-600 rounded-sm flex">
                                <p className="text-sm font-semibold">Sort</p>
                                <img className="w-2" src="/Rectangle.svg" />
                            </button>
                            <button className="bg-green-600 gap-2 items-center px-4 h-8 rounded-sm flex">
                                <img className="w-4" src="/Repository1.svg" />
                                <p className="text-sm font-semibold">New</p>
                            </button>
                        </div>
                        <div className="mt-8  pb-8 border-b border-neutral-700 flex">
                            <div className="flex-1">
                                <div className="flex items-center gap-4" >
                                    <p className="font-bold text-lg text-blue-500 hover:underline">GithubClone</p>
                                    <button className="text-xs bg-gray-800 px-2  h-6 rounded-full border border-neutral-600">
                                        Public</button>
                                </div>
                                <div className="flex mt-4 items-center gap-2" >
                                    <p className=" w-3 h-3 rounded-full bg-yellow-400"></p>
                                    <p className="text-xs text-neutral-400 font-semibold">JavaScript</p>
                                    <p className="text-xs font-semibold text-neutral-400">Updated 15 hours ago</p>
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
                        <div className="mt-8  pb-8 border-b border-neutral-700 flex">
                            <div className="flex-1">
                                <div className="flex items-center gap-4" >
                                    <p className="font-bold text-lg text-blue-500 hover:underline">EcommerceProject </p>
                                    <button className="text-xs bg-gray-800 px-2  h-6 rounded-full border border-neutral-600">
                                        Public</button>
                                </div>
                                <div className="flex mt-4 items-center gap-2" >
                                    <p className=" w-3 h-3 rounded-full bg-yellow-400"></p>
                                    <p className="text-xs text-neutral-400 font-semibold">JavaScript</p>
                                    <p className="text-xs font-semibold text-neutral-400">Updated 1 day ago</p>
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
                        <div className="mt-8  pb-8 border-b border-neutral-700 flex">
                            <div className="flex-1">
                                <div className="flex items-center gap-4" >
                                    <p className="font-bold text-lg text-blue-500 hover:underline">skills-introduction-to-github</p>
                                    <button className="text-xs bg-gray-800 px-2  h-6 rounded-full border border-neutral-600">
                                        Public</button>
                                </div>
                                <div className="flex mt-4 items-center gap-2" >
                                    <p className=" w-3 h-3 rounded-full bg-yellow-400"></p>
                                    <p className="text-xs text-neutral-400 font-semibold">JavaScript</p>
                                    <p className="text-xs font-semibold text-neutral-400">Updated 2 days ago</p>
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
                        <div className="mt-8  pb-8 border-b border-neutral-700 flex">
                            <div className="flex-1">
                                <div className="flex items-center gap-4" >
                                    <p className="font-bold text-lg text-blue-500 hover:underline">Rock_Paper_Scissors</p>
                                    <button className="text-xs bg-gray-800 px-2  h-6 rounded-full border border-neutral-600">
                                        Public</button>
                                </div>
                                <div className="flex mt-4 items-center gap-2" >
                                    <p className=" w-3 h-3 rounded-full bg-yellow-400"></p>
                                    <p className="text-xs text-neutral-400 font-semibold">JavaScript</p>
                                    <p className="text-xs font-semibold text-neutral-400">Updated last week</p>
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

                    </div>
                </mean>
            </div>
        </>
    );
}