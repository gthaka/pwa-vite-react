import { render, screen } from "@testing-library/react";
import UserCard from "../UserCard";
import mockUsers from "../../__mocks__/users";
import { User } from "../../interfaces";

const mockUser: User = mockUsers[0];
describe("UserCard Component", () => {
  test("renders user card with correct data", () => {
    render(<UserCard {...mockUser} />);

    // Assert that the user card is rendered with the correct data
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.address.suite)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });
});
