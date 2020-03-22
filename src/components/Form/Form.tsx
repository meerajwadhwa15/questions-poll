import React, { FunctionComponent, ReactNode, SyntheticEvent } from 'react';

export type Props = {
    children: ReactNode,
    handleSubmit: (e: SyntheticEvent) => void,
    className?: string
};
  
const Form: FunctionComponent<Props> = ({ children, handleSubmit, ...others }) => (
    <form onSubmit={handleSubmit} {...others}>
        {children}
    </form>
  );
  
export default Form;