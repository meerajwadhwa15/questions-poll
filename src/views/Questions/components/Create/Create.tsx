import React, { FunctionComponent, useState, SyntheticEvent } from "react";
import { Modal, Form } from '@/components';
import {
    createQuestionPayload
} from "@/types/questions";
export type Props = {
    handleSubmit: (obj: createQuestionPayload) => void
};

const CreateQuestion: FunctionComponent<Props> = ({ handleSubmit }) => {
    const [addQuestionStatus, setAddQuestionStatus] = useState(false);
    const [question, setQuestion] = useState('');
    const [choice1, setChoice1] = useState('');
    const [choice2, setChoice2] = useState('');
    const [choice3, setChoice3] = useState('');
    const [choice4, setChoice4] = useState('');

    const handleSubmitForm = (e: SyntheticEvent) => {
        e.preventDefault();
        let choices = [];
        if (choice1) {
            choices.push(choice1);
        }
        if (choice2) {
            choices.push(choice2);
        }
        if (choice3) {
            choices.push(choice3);
        }
        if (choice4) {
            choices.push(choice4);
        }
        handleSubmit({
            question,
            choices
        });

        setAddQuestionStatus(false);
    };

    return (<div>
        <Modal showModal={addQuestionStatus} title="Add Question" closeModal={(status: boolean) => { setAddQuestionStatus(status) }}>
            <Form className="add-question" handleSubmit={handleSubmitForm}>
                <label className="field">
                    <span>Question:</span> <input required name="question" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const { value } = e.currentTarget;
                        setQuestion(value);
                    }} />
                </label>
                <label className="field">
                    <span>Choice 1:</span> <input required name="choice1" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const { value } = e.currentTarget;
                        setChoice1(value);
                    }} />
                </label>
                <label className="field">
                    <span>Choice 2:</span> <input required name="choice2" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const { value } = e.currentTarget;
                        setChoice2(value);
                    }} />
                </label>
                <label className="field">
                    <span>Choice 3:</span> <input name="choice3" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const { value } = e.currentTarget;
                        setChoice3(value);
                    }} />
                </label>
                <label className="field">
                    <span>Choice 4:</span> <input name="choice4" onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const { value } = e.currentTarget;
                        setChoice4(value);
                    }} />
                </label>
                <div className="field actions">
                    <button type="submit" className="btn btn--primary">Add</button>
                    <input className="btn" value="Reset" type="reset" />
                </div>
            </Form>

        </Modal>

        {!addQuestionStatus ? <button className="add-question-btn btn btn--primary" onClick={() => {
            setAddQuestionStatus(true)
        }}>Add Question</button> : null}

    </div>);
};

export default CreateQuestion;
