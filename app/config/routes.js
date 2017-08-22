// Include the React library
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Main from '../components/Main'

export default () => (
  <BrowserRouter>
    <Route path="/" component={Main}/>
  </BrowserRouter>
);

