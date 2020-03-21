export type choice = {
  choice: string;
  votes: number;
  url: string;
};

export type question = {
  question: string;
  published_at: string;
  url: string;
  choices: choice[];
};
export type questions = question[];

export enum Types {
  SET_FETCHING = "SET_FETCHING",
  FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR"
}

export interface SetFetch {
  type: Types.SET_FETCHING;
  isFetching: boolean;
}

export interface FetchSuccessActionType {
  type: Types.FETCH_QUESTIONS_SUCCESS;
  questions: questions;
}

export interface FetchErrorActionType {
  type: Types.FETCH_QUESTIONS_ERROR;
}

export interface ReducerState {
  isFetching: boolean;
  questions: questions;
}

export interface ReducerAction {
  type: string;
  questions: questions;
  isFetching: boolean;
}

export interface ReducerType {
  QuestionsReducers: ReducerState;
}

export interface DispatchProps {
  fetchQuestions: () => void;
}

export type StateProps = {};

export interface ComponentProps {}
