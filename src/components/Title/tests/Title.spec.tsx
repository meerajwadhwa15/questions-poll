import React from "react";
import Title from "../Title";
import { create } from "react-test-renderer";

const props = {
};

test("Matches the snapshot with Title", () => {
  const component = create(
      <Title {...props}>Page title</Title>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
