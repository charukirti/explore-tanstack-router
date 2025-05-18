import { useNavigate } from "@tanstack/react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="p-10 ">
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-800 mb-3">Go back for home page</p>
      <button
        className="p-4 text-xl font-semibold"
        onClick={() => navigate({ to: "/" })}
      >
        Home Page
      </button>
    </main>
  );
}
