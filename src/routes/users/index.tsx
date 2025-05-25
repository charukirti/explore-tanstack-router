import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchUsers, type User } from "../../api/user";

export const Route = createFileRoute("/users/")({
  validateSearch: (search) => {
    return {
      page: search.page || 1
    }
  },
  component: RouteComponent,
  loaderDeps: ({search: {page}}) => page,
  loader: async({deps: page}) => fetchUsers(page),
});

function RouteComponent() {
  const { data } = Route.useLoaderData();
  console.log(data);
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">Users listing</h1>
      <p className="text-gray-800 mb-3">
        This page is about to list all the users of product
      </p>

      <ul>
        {data.map((u: User) => (
          <li className="mb-2" key={u.id}>
            <Link
              to="/users/$userId"
              params={{ userId: u.id }}
              className="text-blue-500 hover:text-blue-700"
            >
              {u.first_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
