import React, { FunctionComponent, ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

const Title: FunctionComponent<Props> = ({ children }) => <h1 className="page-title">{children}</h1>;

export default Title;
