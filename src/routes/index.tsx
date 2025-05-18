import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="p-10 ">
      <h1 className="text-4xl font-bold mb-2">Exploring Tanstack Router</h1>
      <p className="text-gray-800 mb-3">Going to explore these features</p>
      <ul className="text-gray-600 text-sm">
        <li>File Based routing</li>
        <li>Dynamic Routing</li>
        <li>Nested Routing</li>
        <li>Data Loading</li>
        <li>Search Params</li>
        <li>Path Params</li>
        <li>Code Spliting</li>
        <li>Not Found Errors</li>
      </ul>
    </main>
  );
}
