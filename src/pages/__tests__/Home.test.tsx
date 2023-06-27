import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";

describe("Home Component", () => {
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
