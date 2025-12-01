import { Header } from "./Header"
import { LeftPanel } from "./components/LeftPanel";
import { CardWork } from "./components/WorkingCard"
import { useNavigate } from "react-router";
import { ToolBarWorkPage } from "./components/ToolBar";

import { projectsWorkPage } from "./Data/ProjectsData";

export function MyWork() {

    const navigate = useNavigate();

    const goToProject = (Path) => {
        navigate(Path);

        console.log(Path)
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <mean className="flex gap-6 mt-8 flex-col md:flex-row">
                    <LeftPanel />
                    <div className=" flex-2">
                        <ToolBarWorkPage />
                        {projectsWorkPage.map((p) => {
                            return (
                                <CardWork
                                    key={p.id}
                                    title={p.title}
                                    status={p.status}
                                    time={p.time}
                                    tech={p.tech}
                                    color={p.color}
                                    onClick={() => goToProject(p.Path)}
                                    cursor={p.cursor}
                                />
                            )
                        })}
                    </div>
                </mean>
            </div>
        </>
    );
}