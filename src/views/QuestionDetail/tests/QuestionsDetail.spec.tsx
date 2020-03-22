import React from "react";
import { QuestionDetailView, mapStateToProps } from "../QuestionDetail";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

const questionDetail =
    {
        id: 1,
        question: "Favourite programming language?",
        published_at: "2020-03-12T12:42:40.310135+00:00",
        url: "/questions/1",
        choices: [
            {
                choice: "Swift",
                votes: 39,
                url: "/questions/1/choices/1"
            }
        ]
    };

const props = {
    questionDetail,
    isFetchingDetail: false,
    fetchQuestion: jest.fn(),
    match: {
        params: {
            id: 1
        }
    }
};

const propsWithNoDetail = {
    questionDetail: null,
    isFetchingDetail: false,
    fetchQuestion: jest.fn(),
    match: {
        params: {
            id: 1
        }
    }
};

describe("Questions Enzyme testing", () => {
    test("Should call fetchQuestions", () => {
        const spyFetchQuestionAction = jest.spyOn(propsWithNoDetail, "fetchQuestion");
        const component = create(
            <BrowserRouter>
                <QuestionDetailView {...propsWithNoDetail} />
            </BrowserRouter>
        );

        const instance = component.getInstance();

        instance.componentDidMount();
        expect(spyFetchQuestionAction).toBeCalled();
    });

    test("Should not call fetchQuestions", () => {
        const spyFetchQuestionAction = jest.spyOn(props, "fetchQuestion");
        const component = create(
            <BrowserRouter>
                <QuestionDetailView {...props} />
            </BrowserRouter>
        );

        const instance = component.getInstance();

        instance.componentDidMount();
        expect(spyFetchQuestionAction).not.toBeCalled();
    });

    test("Matches the snapshot with QuestionDetail", () => {
        const component = create(
            <BrowserRouter>
                <QuestionDetailView {...props} />
            </BrowserRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test("Should test mapStateToProps", () => {
        expect(
            mapStateToProps({
                QuestionsReducers: { questionDetail, isFetchingDetail: false }
            })
        ).toEqual({
            questionDetail,
            isFetchingDetail: false
        });
    });
});
