import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter component", () => {
  it("should show initial count as 0", () => {
    render(<App />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  it("should increment count when button is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("button"));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });
});