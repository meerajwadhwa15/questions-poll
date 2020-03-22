import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Loader, NoRecordFound } from "@/components";
import { FetchQuestionActions } from "@/store/actions";
import Detail from "./components/Detail";

import {
  StateProps,
  ReducerTypeDetail,
  ReducerStateDetail,
  DispatchPropsDetail,
  ComponentProps
} from "@/types/questions";

export const mapStateToProps = ({
  QuestionsReducers: { questionDetail, isFetchingDetail }
}: ReducerTypeDetail): ReducerStateDetail => ({
    questionDetail,
    isFetchingDetail
  });

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchPropsDetail => ({
  fetchQuestion: (id: number) => {
    dispatch(FetchQuestionActions(id));
  }
});

type QuestionDetailPageProps = {
  match: {
    params: {
      id: number;
    };
  };
};

export type Props = ComponentProps & ReducerStateDetail & DispatchPropsDetail & QuestionDetailPageProps;

class QuestionDetailView extends Component<Props, StateProps> {
  componentDidMount() {
    const { fetchQuestion, questionDetail, match: { params: { id } } } = this.props;
    if (fetchQuestion && id && (!questionDetail || (questionDetail.id && questionDetail.id !== id))) {
      fetchQuestion(id);
    }
  }

  render() {
    const { questionDetail, isFetchingDetail } = this.props;
    return (
      <div>
        {isFetchingDetail ? (
          <Loader />
        ) : questionDetail ? (
          <Detail item={questionDetail} />
        ) : (
              <NoRecordFound>No Question Found</NoRecordFound>
            )}
      </div>
    );
  }
}

export { QuestionDetailView };
export default connect<
  ReducerStateDetail,
  DispatchPropsDetail,
  ComponentProps,
  ReducerTypeDetail
  >(
  mapStateToProps,
  mapDispatchToProps
  )(QuestionDetailView);
