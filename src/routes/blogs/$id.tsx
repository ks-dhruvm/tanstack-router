import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/$id")({
  component: BlogRoute,
  loader: ({ params }) => {
    return params;
  },
});

function BlogRoute() {
  const { id } = Route.useParams();
  return (
    <section className="flex flex-col justify-center items-center gap-4 size-full">
      <h1 className="text-6xl font-bold">{id}</h1>
      <Link to="/blogs">Blogs</Link>
    </section>
  );
}
