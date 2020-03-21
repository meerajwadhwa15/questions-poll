import { Reducer } from "redux";
import { ReducerState, ReducerAction, Types } from "@/types/questions";

export const initialState: ReducerState = {
  isFetching: false,
  questions: []
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
    case Types.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions
      };
    case Types.FETCH_QUESTIONS_ERROR:
      return { ...state, questions: [] };
    default:
      return state;
  }
};

export default QuestionsReducer;
