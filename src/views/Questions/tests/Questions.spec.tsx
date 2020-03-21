import React from "react";
import { QuestionsListView, mapStateToProps } from "../Questions";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

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

const props = {
  questions: questionsList,
  isFetching: false,
  fetchQuestions: jest.fn()
}; 

const propsWithNolist = {
  questions: [],
  isFetching: false,
  fetchQuestions: jest.fn()
}; 

describe("Questions Enzyme testing", () => {
  test("Should call fetchQuestions", () => {
    const spyFetchQuestionsAction = jest.spyOn(propsWithNolist, "fetchQuestions");
    const component = create(
      <BrowserRouter>
        <QuestionsListView {...propsWithNolist}  />
      </BrowserRouter>
    );

    const instance = component.getInstance();

    instance.componentDidMount();
    expect(spyFetchQuestionsAction).toBeCalled();
  });

  test("Should not call fetchQuestions", () => {
    const spyFetchQuestionsAction = jest.spyOn(props, "fetchQuestions");
    const component = create(
      <BrowserRouter>
        <QuestionsListView {...props}  />
      </BrowserRouter>
    );

    const instance = component.getInstance();

    instance.componentDidMount();
    expect(spyFetchQuestionsAction).not.toBeCalled();
  });

  test("Matches the snapshot with QuestionsList", () => {
    const component = create(
      <BrowserRouter>
        <QuestionsListView {...props} />
      </BrowserRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Should test mapStateToProps", () => {
    expect(
      mapStateToProps({
        QuestionsReducers: { questions: questionsList, isFetching: false }
      })
    ).toEqual({
      questions: questionsList,
      isFetching: false
    });
  });
});
