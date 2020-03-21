import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Title, Loader, NoRecordFound } from "@/components";
import QuestionsList from "./components/List";
import { FetchQuestionsActions } from "@/store/actions";

import {
  StateProps,
  ReducerType,
  ReducerState,
  DispatchProps,
  ComponentProps
} from "@/types/questions";

export const mapStateToProps = ({
  QuestionsReducers: { questions, isFetching }
}: ReducerType): ReducerState => ({
  questions,
  isFetching
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  fetchQuestions: () => {
    dispatch(FetchQuestionsActions());
  }
});

export type Props = ComponentProps & ReducerState & DispatchProps;

class QuestionsListView extends Component<Props, StateProps> {
  componentDidMount() {
    const { fetchQuestions, questions } = this.props;
    if (fetchQuestions && (!questions || !questions.length)) {
      fetchQuestions();
    }
  }

  render() {
    const { questions, isFetching } = this.props;
    return (
      <div>
        <Title>Questions</Title>
        {isFetching ? (
          <Loader />
        ) : questions && questions.length ? (
          <QuestionsList list={questions} />
        ) : (
          <NoRecordFound>No Questions Found</NoRecordFound>
        )}
      </div>
    );
  }
}

export { QuestionsListView };
export default connect<
  ReducerState,
  DispatchProps,
  ComponentProps,
  ReducerType
>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsListView);
