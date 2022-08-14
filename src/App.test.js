import { render, screen, logRoles } from "@testing-library/react";
import App from "./App";

// ---------------Basic-------------
test("Test 1", () => {
  render(<App />);
  // logRoles(screen.getByTestId("myrootdiv"));
  const buttonElem = screen.getByRole("button", {
    name: "Test Button",
    exact: false,
  });
  // const buttonElem = screen.queryByRole("button", {
  //   name: "Test Button",
  //   exact: false,
  // });
  // expect(buttonElem).not.toBeInTheDocument();
  // expect(buttonElem).toBeNull();
  expect(buttonElem).toBeInTheDocument();
});
