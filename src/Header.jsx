import { Input } from "/src/components/ui/input"
import { useNavigate, useLocation } from "react-router";


export function Header() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
  
    const goTo = (Path) => {
      navigate(Path);
    };
    

    
    
    return (
        <header className="flex flex-col justify-between bg-[#010409] h-[100px] border-b border-neutral-700 ">
            <div onClick={() => goTo("/")} className="flex gap-4 ml-3 mt-3">
                <div className="flex gap-4 items-center flex-2 ">
                    <div className="py-1 px-1 border border-neutral-700 rounded-sm">
                    <img className="w-4 h-4" src="/Menu.svg"></img>
                </div>
                <img className="w-7 h-7" src="/Gitlogo.svg"></img>
                <p className="font-bold">Alyoub</p>
                </div>
                <div className="flex hide-on-mobile justify-end gap-2 mr-4 flex-1 items-center ">
                <Input className="w-70 border-neutral-700" type="email" placeholder="Type / To search" />
                <div className="py-1 px-1 border border-neutral-700 rounded-sm">
                    <img className="w-4 h-4" src="/code1.png"></img>
                </div>
                <div className="py-1 px-1 border border-neutral-700 rounded-sm">
                    <img className="w-4 h-4" src="/plus.png"></img>
                </div>
                <div className="py-1 px-1 border border-neutral-700 rounded-sm">
                    <img className="w-4 h-4" src="/code.png"></img>
                </div>
                <img className="w-10 h-10 object-cover border border-neutral-700 rounded-full " src="/ME.png"></img>
                
                </div>
            </div>
            <div className=" flex">
                <button onClick={() => goTo("/")} className={`px-2 py-2 ml-4 flex gap-2 items-center ${isActive("/") ? "border-orange-500 border-b-2" : "border-none"}`}>
                    <img className="w-4 h-4" src="/Star.svg"></img>
                    <p className="text-sm">Overview</p>
                </button>
                <button onClick={ () => goTo("/aboutme")} className={`px-2 py-2 ml-4 flex gap-2 items-center ${isActive("/aboutme") ? "border-orange-500 border-b-2" : "border-none"}`}>
                    <img className="w-6 h-4" src="/Info.svg"></img>
                    <p className=" text-sm">About</p>
                </button>
                <button onClick={() => goTo("/mywork")} className={`px-2 py-2 ml-4 flex gap-2 items-center ${isActive("/mywork") ? "border-orange-500 border-b-2" : "border-none"}`}>
                    <img className="w-6 h-4" src="/workflow.svg"></img>
                    <p className=" text-sm">Work</p>
                </button>
            </div>
        </header>
    );
}