import { createFileRoute, Link } from "@tanstack/react-router";

const blogs: string[] = ["blog-1", "blog-2", "blog-3", "blog-4", "blog-5"];

export const Route = createFileRoute("/blogs/")({
  component: BlogsRoute,
});

function BlogsRoute() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-6xl font-bold">Blogs</h1>
      <div className="flex gap-2">
        {blogs.map((blog) => (
          <Link key={blog} to="/blogs/$id" params={{ id: blog }}>
            {blog}
          </Link>
        ))}
      </div>
    </section>
  );
}
