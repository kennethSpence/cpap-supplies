import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default user name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kenneth Spence/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders default card", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kenneth Spence/i);
  expect(linkElement).toBeInTheDocument();
});
