import { render, screen, logRoles, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// // ---------------Basic-------------
// test("Test 1", () => {
//   render(<App />);
//   // logRoles(screen.getByTestId("myrootdiv"));
//   const buttonElem = screen.getByRole("button", {
//     name: "Test Button",
//     exact: false,
//   });
//   // const buttonElem = screen.queryByRole("button", {
//   //   name: "Test Button",
//   //   exact: false,
//   // });
//   // expect(buttonElem).not.toBeInTheDocument();
//   // expect(buttonElem).toBeNull();
//   expect(buttonElem).toBeInTheDocument();
// });

test("Comment gets displayed after submitting", async () => {
  render(<App />);
  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });
  const checkbox = screen.getByLabelText("I agree to terms and conditions.", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  await userEvent.type(commentInput, "First Comment");
  await userEvent.click(checkbox);
  await userEvent.click(submitButton);

  // const commentLi = screen.getByText("First Comment", { exact: false });
  const commentLi = await screen.findByText("First Comment", { exact: false });
  expect(commentLi).toBeInTheDocument();
});

test("Second comment gets displayed after submitting", async () => {
  render(<App />);
  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });
  const checkbox = screen.getByLabelText("I agree to terms and conditions.", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  await userEvent.type(commentInput, "Second Comment");
  await userEvent.click(checkbox);
  await userEvent.click(submitButton);
  await userEvent.clear(commentInput);

  await userEvent.type(commentInput, "Awesome");
  await userEvent.click(submitButton);

  // const commentLi = screen.getByText("Second Comment", { exact: false });
  // expect(commentLi).toBeInTheDocument();
  // const commentLi = screen.getAllByRole("listitem");

  // 2 method
  await waitFor(() => {
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(2);
  });

  // 1 method
  // const commentLi = await screen.findAllByRole(
  //   "listitem",
  //   {},
  //   { interval: 500, timeout: 2000 }
  // );
  // screen.debug();
  // expect(commentLi.length).toBe(2);
});
