import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

describe("Banner Component", () => {
  test("renders user card with correct data", () => {
    const bannerInfo = <h1>Hi There 🧪</h1>;
    render(<Banner>{bannerInfo}</Banner>);

    const header = screen.getByRole("heading", {
      level: 1,
      name: /🧪/i,
    });
    expect(header).toBeInTheDocument();
  });
});
