import { LeftPanel } from "./components/LeftPanel";
import { Header } from "./Header";

export function ProjectInfo1({
  title,
  description,
  P1Title,
  P1Description,
  P2Title,
  P2Description,
  P3Title,
  P3Description,
  srcText,
  srcHref,
}) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-20">
        <main className="flex gap-6 mt-8 flex-col md:flex-row">
          <LeftPanel />
          <div className="flex-2">
            <div className="border border-neutral-700 rounded-sm">
              <div className="border-b border-neutral-700 rounded-lg px-4 flex justify-between items-center">
                <div className="flex gap-2 py-2 px-2 border-b-2 border-orange-500">
                  <img className="w-4" src="/Read.svg" alt="read icon" />
                  <p className="font-semibold">README</p>
                </div>
                <div className="flex gap-6">
                  <img className="w-4" src="/Pen.svg" alt="pen icon" />
                  <img className="w-4" src="/menu-11.svg" alt="menu icon" />
                </div>
              </div>
              <section className="mt-8 mr-4 pb-6 border-b border-neutral-700 ml-4">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className="mt-4 text-neutral-200 leading-relaxed mb-6">
                  {description}
                </div>
              </section>
              <section className="mt-8 mr-4 pb-6 border-b border-neutral-700 ml-4">
                <h2 className="text-2xl font-semibold">{P1Title}</h2>
                <div className="mt-4 text-neutral-200 leading-relaxed mb-6">
                  {P1Description}
                </div>
              </section>
              <section className="mt-8 mr-4 pb-6 border-b border-neutral-700 ml-4">
                <h2 className="text-2xl font-semibold">{P2Title}</h2>
                <div className="mt-4 text-neutral-200 leading-relaxed mb-6">
                  {P2Description}
                </div>
              </section>
              <section className="mt-8 mr-4 pb-6 border-b border-neutral-700 ml-4">
                <h2 className="text-2xl font-semibold">{P3Title}</h2>
                <div className="mt-4 text-neutral-200 leading-relaxed mb-6">
                  {P3Description}
                  {srcHref && (
                    <>
                      {" "}
                      <a
                        className="text-sm text-blue-400 underline"
                        href={srcHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {srcText}
                      </a>
                    </>
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export function ProjectInfoDataGitHub() {
  return (
    <ProjectInfo1
      title="GitHub Clone Portfolio Project"
      description={
        <>
          This project is part of my front-end portfolio, showcasing my ability to
          replicate complex interfaces, build responsive layouts, and fetch real
          data using APIs. It is a GitHub clone, built to demonstrate modern web
          development skills and interactive UI/UX.
        </>
      }
      P1Title="Overview"
      P1Description={
        <>
          It serves as a portfolio piece to highlight my skills in React,
          JavaScript, Tailwind CSS, and API integration, as well as my ability to
          build reusable components and responsive layouts.
        </>
      }
      P2Title="Features & Highlights"
      P2Description={
        <>
          <p>• <span className="font-bold">Full Desktop & Mobile UI</span> — replicating GitHub’s layout and navigation</p>
          <p>• <span className="font-bold">User Profile Page</span> — avatar, stats, and repository overview, populated dynamically</p>
          <p>• <span className="font-bold">Reusable Components</span> — buttons, cards, lists, modals, etc.</p>
          <p>• <span className="font-bold">Portfolio Ready</span> — serves as a showcase of my front-end development skills</p>
          <p>• <span className="font-bold">Responsive Design</span> — works seamlessly on desktop, tablet, and mobile</p>
        </>
      }
      P3Title="Tech Stack"
      P3Description={
        <>
          <p>• React / JavaScript</p>
          <p>• Tailwind CSS / shadcn/ui</p>
          <p>• Vite / React Router</p>
          <p>• GitHub Public API</p>
        </>
      }
      srcText="GitHub Repository"
      srcHref="https://github.com/your-username/your-repo-link"
    />
  );
}

export function ProjectInfoDataCasa() {
  return (
    <ProjectInfo1
      title="CASA STITCH — Premium Streetwear E-Commerce UI/UX"
      description={
        <>
          A modern streetwear shopping experience designed fully in Figma, focused
          on clean visuals, strong branding, and an intuitive shopping flow.
          This project is currently in development — the full coded version will
          be released soon.
        </>
      }
      P1Title="Overview"
      P1Description={
        <>
          CASA STITCH is a premium e-commerce interface with a bold, modern
          design. The goal is to deliver a smooth, consistent user journey
          across desktop and mobile.
        </>
      }
      P2Title="What I Designed"
      P2Description={
        <>
          <p>
            I designed the full desktop and mobile UI, including the Home, Shop,
            Product Page, Favorites, Cart, Checkout, and Order Confirmation
            screens. The product experience focuses on clean browsing with quick
            actions, product previews on both male and female models to help
            users visualize the fit, detailed size charts, and interactive
            galleries with color options.
          </p>
          <p>
            For the user flow and components, I created a simple and fast checkout
            process, a dark-mode interface, reusable components, and a
            high-fidelity interactive prototype to bring the design to life.
          </p>
        </>
      }
      P3Title="Prototype"
      P3Description={
        <>
          A prototype is available for those who want to explore the design in
          detail.
        </>
      }
      srcText="View Figma Prototype"
      srcHref="https://www.figma.com/file/your-figma-link"
    />
  );
}
