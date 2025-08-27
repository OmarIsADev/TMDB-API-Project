import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "TMDB" }, { name: "description", content: "TMDB" }];
}

export default function Home() {
  return <div>Home</div>;
}
