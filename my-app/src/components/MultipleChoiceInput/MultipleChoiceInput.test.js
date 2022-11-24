import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("MultipleChoiceInput renders on the correct pages", () => {;

  const props = {
    onChange: jest.fn(),
    name: 1,
    optionsArr: [1, 2]
  }

  test(`MultipleChoiceInput renders on the ${pageTypes[2]}`, () => {
    render(<Component pageType={pageTypes[2]} inputOptions={props.onChange} />);
    const actual = screen.getByTestId('MultipleChoiceInput')
    expect(actual).toBeInTheDocument();
    expect(actual).toHaveClass('MultipleChoiceInput')
  });

  test(`MultipleChoiceInput renders on the ${pageTypes[3]}`, () => {
    render(<Component pageType={pageTypes[3]} inputProCon={props.onChange} name={props.name} optionsArr={props.optionsArr} />);
    const actual = screen.getByTestId('pros-cons-input1')
    expect(actual).toBeInTheDocument();
    expect(actual).toHaveClass('pros-cons-input1')
  });
});