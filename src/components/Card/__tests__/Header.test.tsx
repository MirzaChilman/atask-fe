import { render } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom/extend-expect";

describe("Header component", () => {
  const props = {
    image: "/path/to/image.jpg",
    index: 0,
  };

  it("renders component with correct props", () => {
    const { getByAltText, debug } = render(<Header {...props} />);

    const imageElement = getByAltText("avatar");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("width", "200");
    expect(imageElement).toHaveAttribute("height", "200");
    expect(imageElement).toHaveAttribute("fetchpriority");
  });

  it("sets priority to true when index is 0", () => {
    const { getByTestId } = render(<Header {...props} />);

    const imageElement = getByTestId("card-header-image");
    expect(imageElement).toHaveAttribute("fetchpriority");
  });

  it("sets priority to false when index is not 0", () => {
    const { getByTestId } = render(<Header {...props} index={1} />);

    const imageElement = getByTestId("card-header-image");
    expect(imageElement).not.toHaveAttribute("fetchpriority");
  });
});
