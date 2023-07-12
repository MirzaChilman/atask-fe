import { render, waitFor } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the footer component", () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId("card-footer-favorite")).toBeDefined();
    expect(getByTestId("card-footer-edit")).toBeDefined();
    expect(getByTestId("card-footer-trash")).toBeDefined();
  });
});
