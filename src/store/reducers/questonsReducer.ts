import { Reducer } from "redux";
import { ReducerState, ReducerAction, Types } from "@/types/questions";

export const initialState: ReducerState = {
  isFetchingDetail: false,
  questionDetail: null,
  isFetching: false,
  questions: [],
};

const QuestionsReducer: Reducer<ReducerState, ReducerAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SET_FETCHING:
      let questions = action.isFetching === true ? [] : state.questions;
      return {
        ...state,
        isFetching: action.isFetching,
        questions
      };
    case Types.SET_FETCHING_DETAIL:
      let question = action.isFetching === true ? null : state.questionDetail;
      return {
        ...state,
        isFetchingDetail: action.isFetching,
        questionDetail: question,
      };
    case Types.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions
      };
    case Types.FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        questionDetail: action.question
      };
    case Types.FETCH_QUESTIONS_ERROR:
      return { ...state, questions: [] };
    case Types.FETCH_QUESTION_ERROR:
      return { ...state, questionDetail: null };
    default:
      return state;
  }
};

export default QuestionsReducer;
