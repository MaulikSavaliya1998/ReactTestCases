import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "../components/CommentForm";
import userEvent from "@testing-library/user-event";

describe("Test 1", () => {
  test("Initial Conditions", () => {
    render(<CommentForm />);
    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("I agree to terms and conditions.", {
      exact: false,
    });
    expect(checkbox).toBeInTheDocument();
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    expect(submitButton).toBeDisabled();
  });

  test("Enable sub mit button on type and checkbox click", async () => {
    render(<CommentForm />);
    const commentInput = screen.getByPlaceholderText(
      "write your comment here",
      {
        exact: false,
      }
    );
    const checkbox = screen.getByLabelText("I agree to terms and conditions.", {
      exact: false,
    });
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });

    // fireEvent.change(commentInput, { target: { value: "something" } });
    await userEvent.type(commentInput, "something");
    await userEvent.click(checkbox);
    expect(submitButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(submitButton).toBeDisabled();
  });
});
