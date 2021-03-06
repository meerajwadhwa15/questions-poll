import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
export * from '@testing-library/react';

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history
});
