import React from "react";
import List from "../List";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

const questions = [
  {
    question: "Favourite programming language?",
    published_at: "2020-03-12T12:42:40.310135+00:00",
    url: "/questions/1",
    choices: [
      {
        choice: "Swift",
        votes: 39,
        url: "/questions/1/choices/1"
      }
    ]
  }
];

const props = {
  list: questions
};

test("Matches the snapshot with Questions List", () => {
  const component = create(
    <BrowserRouter>
      <List {...props} />
    </BrowserRouter>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
