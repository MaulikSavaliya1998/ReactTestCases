import { render, screen, fireEvent } from "@testing-library/react";
import CommentList from "../components/CommentList";

test("Comments are not available", () => {
  render(<CommentList allComments={[]} />);
  const h2Element = screen.getByText("No Comments", { exact: false });
  expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
  render(
    <CommentList
      allComments={[
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
      ]}
    />
  );
  const h2Element = screen.queryByText("No Comments", { exact: false });
  expect(h2Element).not.toBeInTheDocument();

//   expect(screen.getByText("Comment 1")).toBeInTheDocument();
//   expect(screen.getByText("Comment 2")).toBeInTheDocument();

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(2);
});
