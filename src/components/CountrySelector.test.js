import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CountrySelector from './CountrySelector';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
  <Router>
    <CountrySelector />
  </Router>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});