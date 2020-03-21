import React, { FunctionComponent } from "react";
import { Anchor } from "@/components";
import { question } from "@/types/questions";
import { dateFormater } from "@/utils";

export type Props = {
  question: question;
};

const List: FunctionComponent<Props> = ({
  question: { question, published_at, choices, url }
}) => (
  <div className="card">
    <Anchor to={url} title={question} rel="noopener">
      <h3 className="card__title ellipsis">{question}</h3>
      <p>Published Date: <strong>{dateFormater(published_at)}</strong></p>
      <p>Choices: <strong>{choices.length || 0}</strong></p>
    </Anchor>
  </div>
);

export default List;
