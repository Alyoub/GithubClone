import { Input } from "/src/components/ui/input";
import { ReactTyped } from "react-typed";

export function ToolBarWorkPage() {
    return (
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
    );
}

export function ToolBarAboutPage() {
    return (
        <div className="flex gap-8 hide-on-mobile mb-4 container items-center mt-10 mx-auto px-4">
            <div className="flex felx-1 flex-col md:flex-row gap-4">
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
    );
}

export function RightBarAboutPage() {
    return (
        <div className="flex-1 hide-on-mobile ">

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

            <div className="border-b mt-4 border-neutral-700 pb-6">
                <p className="font-semibold hover:text-blue-500">Releases</p>
                <div className="mt-4">
                    <p className="text-xs text-neutral-400">No releases published</p>
                    <p className="text-xs mt-1 underline text-blue-500">Create a new release</p>
                </div>

            </div>

            <div className="border-b mt-4 border-neutral-700 pb-6">
                <p className="font-semibold hover:text-blue-500">Packages</p>
                <div className="mt-4">
                    <p className="text-xs text-neutral-400">No packages published</p>
                    <p className="text-xs mt-1 underline text-blue-500">Publish your first package</p>
                </div>

            </div>
            <div className="border-b mt-4 border-neutral-700 pb-6">
                <p className="font-semibold hover:text-blue-500">Deployments <span className="ml-1 bg-gray-700  rounded-full px-2">1</span></p>
                <div className="mt-4 flex items-center gap-2">
                    <img src="/checkmark-circle-02.svg" />
                    <p className="text-sm font-semibold">Production <span className="font-medium text-neutral-400">yesterday</span></p>
                </div>

            </div>
            <div className="mt-4 pb-6">
                <p className="font-semibold hover:text-blue-500">Languages</p>
                <div className="flex">
                    <div className="mt-4 flex-3 bg-yellow-300 h-2 rounded-l-lg" />
                    <div className="mt-4 flex-2 bg-violet-600 h-2 " />
                    <div className="mt-4 flex-1 bg-orange-600 h-2 rounded-r-lg " />
                </div>
                <div className="mt-4">
                    <div className=" gap-3 flex items-center">
                        <p className="w-2 h-2 rounded-full bg-amber-300"></p>
                        <p className="text-sm font-semibold">Skill <span className="test-sm ml-2 text-neutral-500"> 65%</span></p>

                        <p className="ml-6 w-2 h-2 rounded-full bg-violet-600"></p>
                        <p className="text-sm font-semibold">Luck <span className="test-sm ml-2 text-neutral-500"> 25%</span></p>
                    </div>

                    <div className=" gap-3 flex items-center">
                        <p className="w-2 h-2 rounded-full bg-orange-600"></p>
                        <p className="text-sm font-semibold">Hope <span className="test-sm ml-2 text-neutral-500"> 10%</span></p>
                    </div>
                </div>

            </div>

        </div>
    );
}


export function AboutMeReadMe()
{
    return(
        <div className="border  border-neutral-700 rounded-sm   flex-3">
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
                    <div className="mt-20 mr-4 pb-6 ml-4">
                        <h1 className="text-3xl font-semibold">
                            👋 Hello, I'm a{" "}
                            <ReactTyped
                                strings={["UI/UX Designer", "Frontend Developer"]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                        <h1 className="mt-8 ml-8 mr-8 text-neutral-200 leading-relaxed mb-6">
                            I'm a <span className="font-semibold">Front-End Developer
                            </span> and <span className="font-semibold">UI/UX Designer </span>
                            who spends way too much time adjusting pixels and arguing with CSS. I love building clean, modern interfaces that actually make sense to humans (and hopefully don’t break on mobile… hopefully).
                            I’m obsessed with good design, smooth interactions, and making users think “wow” instead of “what is this?”.
                            Whether I’m sketching wireframes, choosing the perfect shade of blue, or fighting with responsive layouts at 2 AM, I enjoy turning ideas into real, functional, and beautiful experiences.
                            I like to say I mix logic, creativity, and just a pinch of chaos to build things that look good and feel even better. and interactive interfaces.
                        </h1>
                    </div>
                </div>
    );
}