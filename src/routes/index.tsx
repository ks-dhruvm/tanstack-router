import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeRoute,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Home page",
      },
      {
        title: "Home | Tanstack Router",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    scripts: [
      {
        src: "https://www.google.com",
      },
    ],
  }),
});

function HomeRoute() {
  return <h1 className="text-6xl font-bold">Home</h1>;
}
