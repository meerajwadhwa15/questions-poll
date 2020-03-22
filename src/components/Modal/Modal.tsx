import React, { FunctionComponent, ReactNode } from "react";

export type Props = {
    children: ReactNode;
    closeModal: (status: boolean) => void;
    title: string;
    showModal: boolean;
};

const Modal: FunctionComponent<Props> = ({ showModal, title, children, closeModal }) => {
    const modalStyles = {
        display: showModal ? 'block' : 'none'
    }
    return (<div className="modal" style={modalStyles}>
        <h2 className="modal__title">{title} <button className="modal__close-button" onClick={() => {
            closeModal(false)
        }}>X</button></h2>
        {children}
        </div>
    );
}

export default Modal;


