import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { renderWithRouter, fireEvent, waitForElement } from "./test-utils";
import App from "./App";

const mockStore = configureMockStore();
const questionsList = [
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
  },
  {
    question: "bjbjbjb",
    published_at: "2020-03-21T07:41:42.503695+00:00",
    url: "/questions/5",
    choices: [
      {
        choice: "g",
        votes: 0,
        url: "/questions/5/choices/14"
      },
      {
        choice: "ik",
        votes: 0,
        url: "/questions/5/choices/15"
      }
    ]
  }
];

describe("home", () => {
  it("links question to the detail view of the relevant question", async () => {
    const store = mockStore({
      QuestionsReducers: {
        questions: questionsList,
        isFetching: false
      }
    });

    const { getByText } = renderWithRouter(
      <>
        <Provider store={store}>
        <App />
        <Route
            path="/questions/:id"
            render={({ match }) => <div>matching id: {match.params.id}</div>}
          />
        </Provider>
      </>
    );

    const firstQuestionHeader = await waitForElement(() =>
      getByText(/Favourite programming language?/gi)
    );

    const leftClick = { button: 0 };
    fireEvent.click(firstQuestionHeader, leftClick);
    expect(getByText(/matching id: 1/)).toBeTruthy();
  });
});
