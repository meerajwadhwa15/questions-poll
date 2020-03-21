import { Action as ReduxAction, Store as ReduxStore } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type Action<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export type State = {};

export type Store = ReduxStore<State, Action> & {
  dispatch: Dispatch;
};

export type Dispatch = ThunkDispatch<State, void, Action>;

export interface ApplicationState {}
