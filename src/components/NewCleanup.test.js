import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NewCleanup from './NewCleanup';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
  <Router>
    <NewCleanup />
  </Router>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});