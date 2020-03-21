import React from "react";
import Main from "../Main";
import { create } from "react-test-renderer";

const props = {
};

test("Matches the snapshot with Main", () => {
  const component = create(
      <Main {...props}>
        <div className="test">
            Test Element
        </div>
      </Main>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
