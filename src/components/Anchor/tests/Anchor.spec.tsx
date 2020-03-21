import React from "react";
import Anchor from "../Anchor";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

const props = {
    to: '/questions/1',
    title: 'Question1'
};

test("Matches the snapshot with Anchor", () => {
  const component = create(
    <BrowserRouter>
      <Anchor {...props}>Question1</Anchor>
    </BrowserRouter>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
