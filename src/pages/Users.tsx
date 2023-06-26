import { useEffect, useState } from "react";
import fetchUsers from "../utils/fetchUsers";
import UserCard from "../components/UserCard";
import { User } from "../interfaces";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        let collection = localStorage.getItem("users");
        setUsers(collection ? JSON.parse(collection) : []);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Users
          </h2>
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {users.map((user) => (
              <li key={user.id}>
                <UserCard {...user} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Users;
