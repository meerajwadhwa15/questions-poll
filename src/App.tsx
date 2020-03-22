import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "@/components";
import { Main as MainLayout } from "@/layouts";
import { Questions as QuestionsView, QuestionDetail as QuestionDetailView  } from "@/views";
import ErrorBoundary from "./ErrorBoundary";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <RouteWithLayout
            component={QuestionsView}
            layout={MainLayout}
            exact
            path="/"
          />
          <RouteWithLayout
            component={QuestionDetailView}
            layout={MainLayout}
            exact
            path="/questions/:id"
          />
        </Switch>
      </ErrorBoundary>
    );
  }
}
