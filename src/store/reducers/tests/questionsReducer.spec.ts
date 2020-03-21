import Reducers, { initialState } from './../questonsReducer';
import { ReducerState, ReducerAction, Types } from '@/types/questions';

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
  

const setFetchAsLoading = {
  type: Types.SET_FETCHING,
  isFetching: true
};
const setFetchAsNotLoading = {
  type: Types.SET_FETCHING,
  isFetching: false
};

const fetchQuestionsListSuccessAction = {
  type: Types.FETCH_QUESTIONS_SUCCESS,
  questions: questionsList
};

const fetchQuestionsListErrorAction = {
  type: Types.FETCH_QUESTIONS_ERROR,
  questions: []
};

describe('Questions Reducers Unit test', function() {
  test('should return the initial state', () => {
    expect(Reducers(initialState, { type: '' })).toEqual(initialState);
  });

  test('should handle "fetchQuestionsListSuccessAction" action', () => {
    expect(Reducers(initialState, fetchQuestionsListSuccessAction)).toEqual({
      ...initialState,
      questions: questionsList
    });
  });

  test('should handle "fetchQuestionsListErrorAction" action', () => {
    expect(Reducers(initialState, fetchQuestionsListErrorAction)).toEqual({
      ...initialState,
      questions: []
    });
  });

  test('should handle "setFetchAsLoading" action with true', () => {
    expect(Reducers(initialState, setFetchAsLoading)).toEqual({
      ...initialState,
      isFetching: true
    });
  });

  test('should handle "setFetchAsNotLoading" action with false', () => {
    expect(Reducers(initialState, setFetchAsNotLoading)).toEqual({
      ...initialState,
      isFetching: false
    });
  });
});
