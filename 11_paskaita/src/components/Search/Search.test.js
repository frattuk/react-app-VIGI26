import { render, fireEvent } from "@testing-library/react";

import Search from "./index";

it("searchRenderCheck", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("dummySearch");
  expect(input).toBeTruphy();
});

describe("changeInInput", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("dummySearch");
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(input.value).toBe("testValue");
  });
});
