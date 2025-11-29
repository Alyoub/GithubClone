import { Header } from "./Header"
import { ReactTyped } from "react-typed";
import { Input } from "/src/components/ui/input"

export function AboutMePage() {
    return (
        <>
            <Header />
            <div className="flex gap-8 mb-4 container items-center mt-10 mx-auto px-4">
                <div className="flex felx-1 gap-4">
                    <button className="bg-gray-800 gap-4 items-center px-2 py-1 border border-neutral-600 rounded-sm flex">
                        <img className="w-4" src="/git-fork.svg" />
                        <p className="text-sm"> main</p>
                        <img className="w-2" src="/Rectangle.svg" />
                    </button>
                    <button className="gap-2 items-center px-2 py-1 flex">
                        <img className="w-4" src="/git-fork.svg" />
                        <p className="text-sm">1 Branch</p>
                        <img className="w-4" src="/tag.svg" />
                        <p className="text-sm">0 Tags</p>
                    </button>
                </div>
                <div className="flex items-center gap-2 flex-1">
                    <Input className="w-60 border-neutral-500" type="email" placeholder="Go to file" />
                    <button className="bg-gray-800 gap-4 items-center px-2 py-1 border border-neutral-600 rounded-sm flex">
                        <p className="text-sm">Add file</p>
                        <img className="w-2" src="/Rectangle.svg" />
                    </button>
                    <button className="bg-gray-800 gap-4 items-center px-2 py-2 border border-neutral-600 rounded-sm flex">
                        <img className="w-4" src="/Clouad.svg" />
                    </button>
                    <button className="bg-green-700 gap-4 items-center px-2 py-1 border border-neutral-600 rounded-sm flex">
                        <img className="w-4" src="/coed.svg" />
                        <p className="text-sm"> Code</p>
                        <img className="w-2" src="/Rectangle.svg" />
                    </button>
                </div>
            </div>
            <div className="container mt-2 gap-4  flex mx-auto px-4">
                <div className="border border-neutral-700 rounded-sm   h-[700px] flex-3">
                    <div className="border-b border-neutral-700 reounded-lg px-4 flex justify-between items-center ">
                        <div className="flex gap-2 py-2 px-2 border-b-2 border-orange-500 ">
                            <img className="w-4" src="/Read.svg" />
                            <p className="font-semibold">README</p>
                        </div>
                        <div className="flex gap-6">
                            <img className="w-4" src="/Pen.svg" />
                            <img className="w-4" src="/menu-11.svg" />
                        </div>
                    </div>
                    <div className="mt-8 mr-4 pb-6 border-b border-neutral-700  ml-4">
                        {/* <h1 className="text-3xl font-semibold">
                            👋 Hello, I'm a{" "}
                            <ReactTyped
                                strings={["UI/UX Designer", "Frontend Developer"]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            />
                        </h1> */}
                        <h1 className="mt-4">
                            I'm a <span className="font-semibold">Front-End Developer</span> and <span className="font-semibold">UI/UX Designer</span> passionate about creating clean, modern, and intuitive digital experiences.
                            I love blending design and development to turn ideas into beautiful, responsive, and interactive interfaces.
                        </h1>
                    </div>
                </div>
                <div className="flex-1 ">

                    <div className="border-b border-neutral-700 pb-6">
                        <div className="flex justify-between">
                            <p className="font-semibold">About</p>
                            <img className="w-5" src="/setting.svg" />
                        </div>
                        <div className="mt-4 flex gap-2  ">
                            <img className="w-5" src="/link-04.svg" />
                            <p className="text-sm underline text-blue-500">giithubclone.vercel.app</p>
                        </div>
                        <div className="mt-2 flex gap-2  ">
                            <img className="w-4" src="/Read.svg" />
                            <p className="text-sm hover:text-blue-400 text-neutral-400">Readme</p>
                        </div>
                        <div className="mt-2 flex gap-2  ">
                            <img className="w-4" src="/Read.svg" />
                            <p className="text-sm hover:text-blue-400 text-neutral-400">Activity</p>
                        </div>
                        <div className="mt-2 flex gap-2  ">
                            <img className="w-4" src="/Star.svg" />
                            <p className="text-sm hover:text-blue-400 text-neutral-400">0 stars</p>
                        </div>
                        <div className="mt-2 flex gap-2  ">
                            <img className="w-4" src="/WatchRepository.svg" />
                            <p className="text-sm hover:text-blue-400 text-neutral-400">0 Watching</p>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <img className="w-4" src="/ForkedRepository.svg" />
                            <p className="text-sm hover:text-blue-400  text-neutral-400">0 forks</p>
                        </div>
                    </div>

                    <div className="border-b mt-8 border-neutral-700 pb-6">
                            <p className="font-semibold">Releases</p>
                        <div className="mt-4 flex gap-2  ">
                            <img className="w-5" src="/link-04.svg" />
                            <p className="text-sm underline text-blue-500">giithubclone.vercel.app</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
}