/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  describe('initialized with defaultCount=10 and description="WWW"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
    });
    it('Renders "Current Count: 10"', () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it('Render title as "WWW"', () => {
      const title = screen.getByText(/WWW/i);
      expect(title).toBeInTheDocument();
    });

    describe('When the incrementor changes to 5 and "+" button is clicked', () => {
      beforeEach(() => {
        userEvent.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        userEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
      });

      it('renders "Current Count: 15"', () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });
    describe('When the incrementor changes to 25 and "-" button is clicked', () => {
      beforeEach(() => {
        userEvent.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        userEvent.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });
      it('Renders "Current Count: -15"', () => {
        expect(screen.getByText("Current Count: -15")).toBeInTheDocument();
      });
    });
  });

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
