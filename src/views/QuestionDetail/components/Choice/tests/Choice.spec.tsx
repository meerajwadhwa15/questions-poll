import React from "react";
import Choice from "../Choice";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";


const choice = {
    choice: "Swift",
    votes: 39,
    url: "/questions/1/choices/1"
};

const props = {
    choice,
};

test("Matches the snapshot with Questions Choice", () => {
    const component = create(
        <Choice {...props} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
