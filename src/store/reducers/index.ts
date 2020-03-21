import { combineReducers, Reducer } from "redux";
import { ApplicationState } from "@/types/store";
import QuestionsReducers from "./questonsReducer";

export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  QuestionsReducers
});
