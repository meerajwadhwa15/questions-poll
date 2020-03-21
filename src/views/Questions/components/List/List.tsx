import React, { FunctionComponent } from "react";
import Card from "./../Card";
import { questions } from "@/types/questions";

export type Props = {
  list: questions;
};

const List: FunctionComponent<Props> = ({ list }) => (
  <div className="questions-list">
    {list.map((question, index) => (
      <Card key={index} question={question} />
    ))}
  </div>
);

export default List;
