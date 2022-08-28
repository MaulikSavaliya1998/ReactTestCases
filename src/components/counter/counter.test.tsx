/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });
    it('Renders "Current Count: 0"', () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it('Render title as "My Counter"', () => {
      const title = screen.getByText(/My counter/i);
      expect(title).toBeInTheDocument();
    });

    describe("When + is Clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
      });
      it('Renders "Current Count: 1"', () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("When - is Clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });
      it('Renders "Current Count: -1"', () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});
