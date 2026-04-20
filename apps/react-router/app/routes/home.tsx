import { HomeServerComponent } from "../components/home-server-component";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router RSC import test" },
    {
      name: "description",
      content:
        "Imports the shared double-server-number package from React Router Framework Mode with RSC enabled.",
    },
  ];
}

export function ServerComponent() {
  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">React Router 7 Framework Mode + RSC</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This route renders the workspace package through React Router&apos;s
          experimental framework-mode RSC support.
        </p>
      </div>
      <HomeServerComponent />
    </main>
  );
}
