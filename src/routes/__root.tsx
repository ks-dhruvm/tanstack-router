import {
  HeadContent,
  Link,
  Outlet,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <h1 className="text-8xl">Page not found</h1>,
});

function RootComponent() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="p-2 flex gap-2 fixed w-full border-b border-b-gray-700">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>{" "}
          <Link to="/blogs" className="[&.active]:font-bold">
            Blogs
          </Link>
          <Link to="/search" search={{ q: "blog-1" }}>
            Search
          </Link>
        </div>
        <main className="flex justify-center items-center w-full h-screen">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </body>
    </html>
  );
}
