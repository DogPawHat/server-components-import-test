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
  return <HomeServerComponent />;
}
