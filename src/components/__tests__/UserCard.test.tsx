import { render, screen } from "@testing-library/react";
import UserCard from "../UserCard";
import { User } from "../../interfaces"; // Replace with the actual path to your User interface file

// Create a mock user object
const mockUser: User = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main Street",
    suite: "Apt 4B",
    city: "New York",
    zipcode: "12345",
    geo: {
      lat: "40.1234",
      lng: "-74.5678",
    },
  },
  phone: "123-456-7890",
  website: "example.com",
  company: {
    name: "ABC Company",
    catchPhrase: "Lorem ipsum dolor sit amet",
    bs: "Lorem ipsum",
  },
};

test("renders user card with correct data", () => {
  render(<UserCard {...mockUser} />);

  // Assert that the user card is rendered with the correct data
  expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.suite)).toBeInTheDocument();
  expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  // Add more assertions for other user card data
});
