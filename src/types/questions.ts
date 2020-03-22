export type Choice = {
  choice: string;
  votes: number;
  url: string;
};

export type Choices = Choice[];

export type Question = {
  id?: number;
  question: string;
  published_at: string;
  url: string;
  choices: Choices;
};
export type Questions = Question[];

export enum Types {
  SET_FETCHING = "SET_FETCHING",
  FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR",
  FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS",
  FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR",
  SET_FETCHING_DETAIL = "SET_FETCHING_DETAIL",
  ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS",
  ADD_QUESTION_ERROR = "ADD_QUESTION_ERROR"
}

export interface SetFetch {
  type: Types.SET_FETCHING;
  isFetching: boolean;
}

export interface SetFetchDetail {
  type: Types.SET_FETCHING_DETAIL;
  isFetching: boolean;
}

export interface FetchSuccessActionType {
  type: Types.FETCH_QUESTIONS_SUCCESS;
  questions: Questions;
}

export interface FetchErrorActionType {
  type: Types.FETCH_QUESTIONS_ERROR;
}

export interface FetchQuestionSuccessActionType {
  type: Types.FETCH_QUESTION_SUCCESS;
  question: Question;
}

export interface FetchQuestionErrorActionType {
  type: Types.FETCH_QUESTION_ERROR;
  question: null
}

export interface AddSuccessActionType {
  type: Types.ADD_QUESTION_SUCCESS;
  question: Question;
}

export interface AddErrorActionType {
  type: Types.ADD_QUESTION_ERROR;
}

export interface ReducerStateList {
  isFetching: boolean;
  questions: Questions;
}

export interface ReducerStateDetail {
  isFetchingDetail: boolean;
  questionDetail: Question | null;
}

export type ReducerState = ReducerStateList & ReducerStateDetail;

export interface ReducerActionList {
  type: string;
  questions: Questions;
  isFetching: boolean;
}

export interface ReducerActionDetail {
  type: string;
  question: Question;
  isFetchingDetail: boolean;
}

export type ReducerAction = ReducerActionList & ReducerActionDetail;

export interface ReducerTypeList {
  QuestionsReducers: ReducerStateList;
}

export interface ReducerTypeDetail {
  QuestionsReducers: ReducerStateDetail;
}

export interface DispatchPropsList {
  fetchQuestions: () => void;
  addQuestion: (obj: createQuestionPayload) => void
}

export interface DispatchPropsDetail {
  fetchQuestion: (id: number) => void;
}

export type DispatchProps = DispatchPropsList & DispatchPropsDetail;

export type StateProps = {};

export interface ComponentProps {}

export type createQuestionPayload = {question: string; choices: string[]};
