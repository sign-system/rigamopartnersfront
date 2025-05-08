import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register in Georgia" },
    { name: "description", content: "Partners" },
  ];
}

export default function Home() {
  return <Welcome />;
}
