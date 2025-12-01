import { Header } from "./Header"
import { ToolBarAboutPage, RightBarAboutPage , AboutMeReadMe } from "./components/ToolBar";

export function AboutMePage() {
    return (
        <>
            <Header />
            <ToolBarAboutPage />
            <div className="container mt-2 gap-4   flex mx-auto px-4">
                <AboutMeReadMe />
                <RightBarAboutPage />
            </div>
        </>
    );
}