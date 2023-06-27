import { render, screen } from "@testing-library/react";
import { escapeRegExp } from "lodash";
import Home from "../Home";
import About from "../About";
import Users from "../Users";
import { APP_NAME } from "../../application";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  test("renders with into text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Assert that the PWA text is present
    expect(
      screen.getByText(/a simple pwa implementation/i)
    ).toBeInTheDocument();
  });
});

describe("About Page", () => {
  test("renders with about head text", () => {
    render(<About />);

    const appNameRegex = new RegExp(escapeRegExp(`about ${APP_NAME}`), "i");
    expect(screen.getByText(appNameRegex)).toBeInTheDocument();
  });
});

describe("Users Page", () => {
  test("renders with into text", () => {
    render(<Users />);

    // Assert that theuers text is present
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });
});
