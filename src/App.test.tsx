import App from "./App";
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

test("Sum test", () => {
  expect(1 + 2).toBe(3);
});

test("<APP /> test", () => {
  const { getByText } = render(<App />);
  expect(getByText("hello World")).toBeVisible();
});
