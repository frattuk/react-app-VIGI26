import { render, fireEvent } from "@testing-library/react";

import TestButton from "./index";

it("checkButtonRender", () => {
  const { screen.queryByTitle } = render(<TestButton />);
  const btn = screen.queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { screen.queryByTitle } = render(<TestButton />);
    const btn = screen.queryByTitle("dummyButton");
    expect(btn.innerHTML).toBe("Press Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("Button Clicked!");
  });
});
