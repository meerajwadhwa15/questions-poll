import React from "react";
import NoRecordFound from "../NoRecordFound";
import { create } from "react-test-renderer";

const props = {
};

test("Matches the snapshot with NoRecordFound", () => {
  const component = create(
      <NoRecordFound {...props}>No Record Found.</NoRecordFound>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
