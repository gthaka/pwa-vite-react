import React from "react";
import { User } from "../interfaces";

const list = [
  "Missy",
  "Oscar",
  "Salem",
  "Spooky",
  "Snuggles",
  "Miss kitty",
  "Trouble",
  "Rascal",
  "Muffin",
  "Toby",
  "Sadie",
  "Sasha",
  "Gracie",
  "Cali",
  "Chester",
  "Dusty",
  "Baby",
  "Precious",
  "Casper",
  "Oreo",
];

const UserCard: React.FC<User> = (props) => {
  const randomIndex = Math.floor(Math.random() * list.length);

  // Retrieve the item at the random index
  const randomAvatar = list[randomIndex];
  return (
    <>
      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
          <img
            className="rounded-lg object-cover shadow-lg"
            src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${randomAvatar}`}
            alt=""
          />
        </div>
        <div className="sm:col-span-2">
          <div className="space-y-4">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{props.name}</h3>
              {/* <p className="text-indigo-600">{props.email}</p> */}
            </div>
            <div className="text-lg">
              <p className="text-gray-500">{props.phone}</p>
              <p className="text-gray-500">{props.email}</p>
              <p className="text-gray-500">{props.address.suite}</p>
              <p className="text-gray-500">{props.address.city}</p>
            </div>
            <div className="text-lg">
              <p className="text-indigo-500">{props.website}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
