import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">Users listing</h1>
      <p className="text-gray-800 mb-3">
        This page is about to list all the users of product
      </p>
    </div>
  );
}
