import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Checking Hello World", () => {
  render(<Hello />);
  const myElement = screen.getByText("Hello World");
  expect(myElement).toBeInTheDocument();
});
