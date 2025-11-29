import { Header } from "./Header"

export function NotFoundPage()
{
    return(
        <>
        <Header />
        <div className="font-bold text-2xl">
            <img className="w-full sm:h-100 xl:h-200 lg:h-150 object-fill" src="/PageNotFound.png"></img>
        </div>
        </>
    );
}