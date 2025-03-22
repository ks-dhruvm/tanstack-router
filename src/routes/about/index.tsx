import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutRoute,
});

function AboutRoute() {
  return <h1 className="text-6xl font-bold">About</h1>;
}
