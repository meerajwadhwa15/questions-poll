import { AnyAction } from "redux";
import { AxiosResponse, AxiosError } from "axios";
import { ThunkDispatch } from "redux-thunk";
import Fetch, { ServerProps } from "@/utils/fetch";
import { FETCH_QUESTIONS } from "@/config/api";
import {
  FetchSuccessActionType,
  SetFetch,
  SetFetchDetail,
  FetchErrorActionType,
  Types,
  FetchQuestionSuccessActionType,
  FetchQuestionErrorActionType,
  createQuestionPayload,
  AddSuccessActionType,
  AddErrorActionType
} from "@/types/questions";

export const isFetching = (isFetching: boolean): SetFetch => {
  return { type: Types.SET_FETCHING, isFetching };
};

export const isFetchingDetail = (isFetching: boolean): SetFetchDetail => {
  return { type: Types.SET_FETCHING_DETAIL, isFetching };
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

export const FetchQuestion = (id: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const showLoader: SetFetchDetail = isFetchingDetail(true);
    dispatch(showLoader);
    const serverProps: ServerProps = {
      url: `${FETCH_QUESTIONS}/${id}`,
      params: {}
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        const fetchSuccess: FetchQuestionSuccessActionType = {
          type: Types.FETCH_QUESTION_SUCCESS,
          question: { id, ...response.data }
        };
        dispatch(fetchSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchError: FetchQuestionErrorActionType = {
          type: Types.FETCH_QUESTION_ERROR,
          question: null
        };
        dispatch(fetchError);
      })
      .finally(() => {
        const hideLoader: SetFetchDetail = isFetchingDetail(false);
        dispatch(hideLoader);
      });
  };
};

export const AddQuestion = (obj: createQuestionPayload) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const serverProps: ServerProps = {
      url: FETCH_QUESTIONS,
      method: 'POST',
      params: {},
      data: obj
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        const fetchSuccess: AddSuccessActionType = {
          type: Types.ADD_QUESTION_SUCCESS,
          question: response.data
        };
        dispatch(fetchSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchError: AddErrorActionType = {
          type: Types.ADD_QUESTION_ERROR,
        };
        dispatch(fetchError);
      })
  };
};
