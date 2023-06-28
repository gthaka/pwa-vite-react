import { User } from "../interfaces";

const mockUsers : User[] = [{
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main Street",
      suite: "Apt. 1",
      city: "New York",
      zipcode: "10001",
      geo: {
        lat: "40.712784",
        lng: "-74.005941",
      },
    },
    phone: "123-456-7890",
    website: "https://johndoe.com",
    company: {
      name: "Acme Corporation",
      catchPhrase: "We make the best widgets",
      bs: "We're better than everyone else",
    },
  }];
  export default mockUsers;