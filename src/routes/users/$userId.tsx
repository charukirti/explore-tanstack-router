import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchUser, type User } from "../../api/user";

export const Route = createFileRoute("/users/$userId")({
  component: RouteComponent,
  loader: async ({ params: { userId } }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return fetchUser(userId)
  },
  pendingComponent: () => <div className="p-20">Loading...</div>,
  errorComponent: () => <div className="p-20 text-red-600">There was an error while fetching data</div>
});

function RouteComponent() {
  const {data}:{data: User} = Route.useLoaderData()
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">User details</h1>
      <p className="text-gray-800 mb-3">
        This page will display individual user details
      </p>

      <div className="flex mb-4">
        <div className="mr-3">
          <img src={data.avatar} />
        </div>
        <div className="flex flex-col">
          <span>{data.first_name} {data.last_name}</span>
          <span>{data.email}</span>
        </div>
      </div>
      <Link to='/users'>Back to users</Link>
    </div>
  );
}
