import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("Results renders on the correct pages", () => {;

  test(`Results renders on the ${pageTypes[6]}`, () => {
    render(<Component pageType={pageTypes[6]} />);
    const actual = screen.getByRole("heading");
    expect(actual).toBeInTheDocument();
  });

  test(`Results renders on the ${pageTypes[10]}`, () => {
    render(<Component pageType={pageTypes[10]} />);
    const actual = screen.getByRole("heading");
    expect(actual).toBeInTheDocument();
  });
});