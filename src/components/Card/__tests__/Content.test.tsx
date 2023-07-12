import { render } from "@testing-library/react";
import Content from "../Content";

describe("Content component", () => {
  const props = {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    site: "example.com",
  };

  it("renders component with correct props", () => {
    const { getByText, getByAltText, debug } = render(<Content {...props} />);

    expect(getByText(props.name)).toBeDefined();
    expect(getByText(props.email)).toBeDefined();
    expect(getByText(props.phone)).toBeDefined();
    expect(getByText(props.site)).toBeDefined();
  });
});
