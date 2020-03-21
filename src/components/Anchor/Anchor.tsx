import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
export type Props = {
  to: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rel?: string;
};

const Anchor: FunctionComponent<Props> = ({ children, ...others }) => (
  <Link {...others}>{children}</Link>
);

export default Anchor;
