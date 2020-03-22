import React, { FunctionComponent } from "react";
import { Question } from "@/types/questions";
import Choice from './../Choice';
import { dateFormater } from "@/utils";
import { Title } from "@/components";

export type Props = {
  item: Question;
};

const Detail: FunctionComponent<Props> = ({ item: { question, published_at, choices } }) => (
  <div className="question-detail">
    <Title>Question: <strong>{question}</strong></Title>
    <p>Published Date: <strong>{dateFormater(published_at)}</strong></p>
    <div className="choices">
      {choices.map(choice => (<Choice key={choice.url} choice={choice} />))}
    </div>
  </div>
);

export default Detail;
