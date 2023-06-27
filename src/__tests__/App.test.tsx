import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import { escapeRegExp } from "lodash";
import { APP_NAME } from "../application";

describe("App Main Component", () => {
  test("renders main page", () => {
    render(<App />);

    // Assert that the PWA text is present
    expect(
      screen.getByText(/a simple pwa implementation/i)
    ).toBeInTheDocument();
  });

  test("navigate through various pages", () => {
    render(<App />);

    // Navigate to the About page
    const navContainer = screen.getByRole("navigation");
    const homeLink = within(navContainer).getByRole("link", {
      name: /home/i,
    });
    const aboutLink = within(navContainer).getByRole("link", {
      name: /about/i,
    });
    const userLink = within(navContainer).getByRole("link", {
      name: /users/i,
    });

    expect(aboutLink).toBeInTheDocument();

    // Simulate click on the about link
    fireEvent.click(aboutLink);
    const appNameRegex = new RegExp(escapeRegExp(`about ${APP_NAME}`), "i");
    expect(screen.getByText(appNameRegex)).toBeInTheDocument();

    fireEvent.click(userLink);
    const h2 = screen.getByRole("heading", { level: 2, name: /users/i });
    expect(h2).toBeInTheDocument();

    fireEvent.click(homeLink);
    expect(
      screen.getByText(/a simple pwa implementation/i)
    ).toBeInTheDocument();
  });
});
