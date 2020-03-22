import React, { FunctionComponent } from "react";
import Card from "./../Card";
import { Questions } from "@/types/questions";

export type Props = {
  list: Questions;
};

const List: FunctionComponent<Props> = ({ list }) => (
  <div className="questions-list">
    {list.map(question => (
      <Card key={question.url} question={question} />
    ))}
  </div>
);

export default List;
