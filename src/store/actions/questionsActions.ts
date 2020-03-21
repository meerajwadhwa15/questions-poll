import { AnyAction } from "redux";
import { AxiosResponse, AxiosError } from "axios";
import { ThunkDispatch } from "redux-thunk";
import Fetch, { ServerProps } from "@/utils/fetch";
import { FETCH_QUESTIONS } from "@/config/api";
import {
  FetchSuccessActionType,
  SetFetch,
  FetchErrorActionType,
  Types
} from "@/types/questions";

export const isFetching = (isFetching: boolean): SetFetch => {
  return { type: Types.SET_FETCHING, isFetching };
};

export const FetchQuestions = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const showLoader: SetFetch = isFetching(true);
    dispatch(showLoader);
    const serverProps: ServerProps = {
      url: FETCH_QUESTIONS,
      params: {}
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        const fetchSuccess: FetchSuccessActionType = {
          type: Types.FETCH_QUESTIONS_SUCCESS,
          questions: response.data
        };
        dispatch(fetchSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchError: FetchErrorActionType = {
          type: Types.FETCH_QUESTIONS_ERROR
        };
        dispatch(fetchError);
      })
      .finally(() => {
        const hideLoader: SetFetch = isFetching(false);
        dispatch(hideLoader);
      });
  };
};
