import { Header } from "./Header"
import { LeftPanel } from "./components/LeftPanel";

export function MyWork()
{
    return(
        <>
        <Header />
        <div className="container mx-auto px-4">
                <mean className="flex gap-6 mt-8 flex-col md:flex-row">
                    <LeftPanel />
                    <div className="border  border-neutral-700 rounded-sm   h-[700px] flex-2">
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
                    <div className="mt-20 mr-4 pb-6 border-b border-neutral-700  ml-4">
                        <h1 className="text-3xl font-semibold">
                            👋 Hello, I'm a
                            
                        </h1>
                    </div>
                </div>
                </mean>
        </div>
        </>
    );
}