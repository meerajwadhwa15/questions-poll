import React, { FunctionComponent, ReactNode } from "react";
import Header from "@/components/Header";
import "./Main.style.scss";

export type Props = {
  children: ReactNode;
};

const Main: FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
);

export default Main;
