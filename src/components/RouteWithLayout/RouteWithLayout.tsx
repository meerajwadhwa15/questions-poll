import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";

export type Props = {
  layout: any;
  component: any;
  path: string;
  exact?: boolean;
};

const RouteWithLayout: FunctionComponent<Props> = ({
  layout: Layout,
  component: Component,
  ...others
}) => (
  <Route
    {...others}
    render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
  />
);

export default RouteWithLayout;
