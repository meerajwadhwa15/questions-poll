import React, { FunctionComponent } from "react";
import { Choice } from "@/types/questions";

export type Props = {
  choice: Choice;
};

const List: FunctionComponent<Props> = ({
  choice: { choice, votes, url }
}) => (
    <div className="choice">
      <div>Choice: <strong>{choice}</strong></div>
      <div>Votes: <strong>{votes}</strong></div>
    </div>
  );

export default List;
