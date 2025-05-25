export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const fetchUser = async (userId: string) => {
  console.log(`Fetching user with id ${userId}...`);
  const res = (
    await fetch(`https://reqres.in/api/users/${userId}`, {
      headers: {
        "X-API-KEY": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    })
  ).json();
  return res;
};

export const fetchUsers = async (pageNumber: object) => {
  console.log("Fetching users...");
  const res = (
    await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      headers: {
        "X-API-KEY": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    })
  ).json();
  return res;
};
