import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">About Tanstack Router</h1>
      <p className="text-gray-800 mb-3">
        A fully type-safe router with built-in data fetching, stale-while
        revalidate caching and first-class search-param APIs.
      </p>
    </div>
  );
}
