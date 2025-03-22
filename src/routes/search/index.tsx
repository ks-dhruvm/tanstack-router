import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search/")({
  validateSearch: ({ q }: { q: string }) => {
    return { q };
  },
  loaderDeps: ({ search }) => {
    return search;
  },
  loader: async ({ deps }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return deps;
  },
  pendingComponent: () => <span>Loading...</span>,
  onError: () => <span>Error</span>,
  component: RouteComponent,
});

function RouteComponent() {
  const { q } = Route.useLoaderData();
  return <div>Hello "/search/{q}"!</div>;
}
