import React from "react";
import Header from "../Header";
import { create } from "react-test-renderer";

const props = {
};

test("Matches the snapshot with Header", () => {
  const component = create(
      <Header {...props}>Header</Header>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
