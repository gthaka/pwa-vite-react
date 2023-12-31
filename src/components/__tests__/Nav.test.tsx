import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav Component", () => {
  test("renders logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Nav offline={false} />
      </MemoryRouter>
    );

    // Verify the presence of the logo
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    // Verify the presence of navigation links
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const usersLink = screen.getByRole("link", { name: /users/i });

    // Assert that link texts are displayed
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();

    // Assert that link destinations are correct
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
    expect(screen.getByText("Users").closest("a")).toHaveAttribute(
      "href",
      "/users"
    );
  });

  test("opens and closes mobile menu on button click", () => {
    render(
      <MemoryRouter>
        <Nav offline={false} />
      </MemoryRouter>
    );

    // Open mobile menu
    const mobileMenuButton = screen.getByRole("button", {
      name: /open main menu/i,
    });
    fireEvent.click(mobileMenuButton);
    const mobileMenu = screen.getByRole("dialog");

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute("data-headlessui-state", "open"); // Assuming you have a CSS class for an open state

    // // Close mobile menu
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeButton);

    expect(mobileMenu).not.toBeInTheDocument();
  });

  test("mobile dialog closes after link selection", () => {
    render(
      <MemoryRouter>
        <Nav offline={false} />
      </MemoryRouter>
    );

    // Open mobile menu
    const mobileMenuButton = screen.getByRole("button", {
      name: /open main menu/i,
    });
    fireEvent.click(mobileMenuButton);
    const mobileMenu = screen.getByRole("dialog");

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute("data-headlessui-state", "open"); // Assuming you have a CSS class for an open state

    // Navigate to the About page
    const aboutLink = screen.getByRole("link", { name: /about/i });
    fireEvent.click(aboutLink);

    expect(mobileMenu).not.toBeInTheDocument();
  });
});
