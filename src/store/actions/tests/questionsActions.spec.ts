import { isFetching, isFetchingDetail, FetchQuestions, FetchQuestion } from "./../questionsActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  SetFetch,
  FetchSuccessActionType,
  FetchErrorActionType,
  Types,
  FetchQuestionErrorActionType,
  FetchQuestionSuccessActionType,
  SetFetchDetail
} from "@/types/questions";
import { FETCH_QUESTIONS } from "@/config/api";
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

const questionDetail =
  {
    id: 1,
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
  };

const setFetchAsLoading: SetFetch = {
  type: Types.SET_FETCHING,
  isFetching: true
};
const setFetchAsNotLoading: SetFetch = {
  type: Types.SET_FETCHING,
  isFetching: false
};

const setDetailPageFetchAsLoading: SetFetch = {
  type: Types.SET_FETCHING_DETAIL,
  isFetching: true
};
const setDetailPageFetchAsNotLoading: SetFetchDetail = {
  type: Types.SET_FETCHING_DETAIL,
  isFetching: false
};


describe("Questions Action Unit test", function () {
  it("should create an action with correct type isFetching", () => {
    expect(isFetching(true)).toEqual(setFetchAsLoading);
    expect(isFetching(false)).toEqual(setFetchAsNotLoading);
  });

  it("should create an action with correct type isFetchingDetail", () => {
    expect(isFetchingDetail(true)).toEqual(setDetailPageFetchAsLoading);
    expect(isFetchingDetail(false)).toEqual(setDetailPageFetchAsNotLoading);
  });

  it("should create an action with correct type FetchQuestions `HAPPY SCENARIO`", () => {
    mock.onGet(FETCH_QUESTIONS).reply(200, questionsList);
    const expectedActions: FetchSuccessActionType = {
      type: Types.FETCH_QUESTIONS_SUCCESS,
      questions: questionsList
    };

    const store = mockStore({ questions: [] });

    return store.dispatch(FetchQuestions()).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading);
    });
  });

  it("should create an action with correct type FetchQuestions `ERROR SCENARIO`", () => {
    mock.onGet(FETCH_QUESTIONS).reply(400, {});

    const expectedActions: FetchErrorActionType = {
      type: Types.FETCH_QUESTIONS_ERROR
    };

    const store = mockStore({ questions: [] });

    return store.dispatch(FetchQuestions()).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading);
    });
  });

  it("should create an action with correct type FetchQuestion `HAPPY SCENARIO`", () => {
    mock.onGet(`${FETCH_QUESTIONS}/1`).reply(200, questionDetail);
    const expectedActions: FetchQuestionSuccessActionType = {
      type: Types.FETCH_QUESTION_SUCCESS,
      question: questionDetail
    };

    const store = mockStore({ questionDetail: null });

    return store.dispatch(FetchQuestion(1)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setDetailPageFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setDetailPageFetchAsNotLoading);
    });
  });

  it("should create an action with correct type FetchQuestion `ERROR SCENARIO`", () => {
    mock.onGet(`${FETCH_QUESTIONS}/1`).reply(400, {});

    const expectedActions: FetchQuestionErrorActionType = {
      type: Types.FETCH_QUESTION_ERROR,
      question: null
    };

    const store = mockStore({ questionDetail: null });

    return store.dispatch(FetchQuestion(1)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setDetailPageFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setDetailPageFetchAsNotLoading);
    });
  });
});
