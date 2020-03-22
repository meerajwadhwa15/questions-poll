import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Title, Loader, NoRecordFound } from "@/components";
import QuestionsList from "./components/List";
import { FetchQuestionsActions } from "@/store/actions";

import {
  StateProps,
  ReducerTypeList,
  ReducerStateList,
  DispatchPropsList,
  ComponentProps
} from "@/types/questions";

export const mapStateToProps = ({
  QuestionsReducers: { questions, isFetching }
}: ReducerTypeList): ReducerStateList => ({
  questions,
  isFetching
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchPropsList => ({
  fetchQuestions: () => {
    dispatch(FetchQuestionsActions());
  }
});

export type Props = ComponentProps & ReducerStateList & DispatchPropsList;

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
  ReducerStateList,
  DispatchPropsList,
  ComponentProps,
  ReducerTypeList
>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsListView);
