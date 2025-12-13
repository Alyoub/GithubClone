import { GithubHeatmap } from "./Contributions-Table"
import { Header } from "./Header"
import { LeftPanel } from "./components/LeftPanel";
import { useNavigate } from "react-router"
import { WorkingCard } from "./components/WorkingCard"
import { AlertOnce } from "./AlertOnce"
import { projectsHomePage } from "./Data/ProjectsData";

export function HomePage() {
    

    const navigate = useNavigate();

     const goToProject = (Path) => {
        navigate(Path);
      };
    
    
    return (
        <>
            <AlertOnce />
            <Header />
            <div className="container mx-auto px-4">
                <mean className="flex gap-6 mt-8 flex-col md:flex-row">
                    <LeftPanel />
                    <div className=" flex-3   px-4">
                        <div className="flex  items-center justify-between">
                            <p className="font-bold lg:text-sm xl:text-lg">Projects</p>
                            <p className="lg:text-xs xl:text-sm text-blue-400 ">Customize your pin</p>
                        </div>
                        <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 gap-4 mt-2 ">
                            
                            {projectsHomePage.map((p) =>{
                                return(
                                    <WorkingCard
                                        id ={p.id}
                                        title={p.title}
                                        description={p.description}
                                        status={p.status}
                                        color={p.color}
                                        tech={p.tech}
                                        onClick={() => goToProject(p.Path)}
                                        cursor={p.cursor}
                                    />
                                ); 
                            })}
                        </div>
                        <div className="mt-12 hide-on-mobile flex">
                            <div className="w-[700px] border rounded-tr-lg rounded-tl-lg border-neutral-700 ">
                                <GithubHeatmap username="Alyoub" />
                            </div>
                            <div className="ml-4 flex flex-col gap-2">
                                <div className="bg-blue-500 px-4 py-2  w-30 rounded-lg text-sm flex justify-start  ">2025</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2024</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2023</div>
                                <div className="hover:bg-neutral-800 hover:text-white text-gray-300 px-4  w-30 py-2 flex justify-start rounded-lg text-xs ">2022</div>
                            </div>
                        </div>
                        <div className="mt-8 hide-on-mobile w-[700px]">
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