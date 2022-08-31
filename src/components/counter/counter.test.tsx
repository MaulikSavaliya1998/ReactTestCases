/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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
      beforeEach(async () => {
        userEvent.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        userEvent.click(screen.getByRole("button", { name: "Add to Counter" }));

        await waitFor(() => screen.getByText("Current Count: 15"));
      });

      it('renders "Current Count: 15"', () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });

      // Documentation: https://testing-library.com/docs/guide-disappearance/#waiting-for-disappearance
      it('"I am too small " disappears after 300ms', async () => {
        await waitForElementToBeRemoved(() =>
          screen.queryByText("I am too small")
        );
      });

      describe('When the incrementor changed to empty string and "+" button is clicked', () => {
        beforeEach(async () => {
          userEvent.type(
            screen.getByLabelText(/Incrementor/),
            "{selectall}{delete}"
          );
          userEvent.click(
            screen.getByRole("button", { name: "Add to Counter" })
          );

          await waitFor(() => screen.getByText("Current Count: 16"));
        });
        it('Render "Current Count:16"', () => {
          expect(screen.getByText("Current Count: 16")).toBeInTheDocument();
        });
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
      it('Renders "Current Count: 1"', async () => {
        // const label = await screen.findByText('Current Count: 1')

        await waitFor(() =>
          expect(screen.getByText("Current Count: 1")).toBeInTheDocument()
        );
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
