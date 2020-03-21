import React from "react";
import Loader from "../Loader";
import { create } from "react-test-renderer";

const props = {
};

test("Matches the snapshot with Loader", () => {
  const component = create(
      <Loader {...props} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
