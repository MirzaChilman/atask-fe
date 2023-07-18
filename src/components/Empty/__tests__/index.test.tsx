import React from "react";
import { render } from "@testing-library/react";
import Empty from "..";

describe("Empty component", () => {
  test("renders the component correctly", () => {
    const { getByTestId, getByText } = render(<Empty />);

    // Assert the presence of the component using its data-testid
    const emptyComponent = getByTestId("empty-component");
    expect(emptyComponent).toBeInTheDocument();

    // Assert the presence of the text content within the component
    const noDataText = getByText("No data");
    expect(noDataText).toBeInTheDocument();

    const searchFirstText = getByText("Please search username first");
    expect(searchFirstText).toBeInTheDocument();
  });
});
