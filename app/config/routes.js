// Include the React library
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../components/Header'

export default () => (
  <BrowserRouter>
    <Header/>
    {/* <Route path="/" component={Header}/>
    <Route path="/" component={Header}/> */}
  </BrowserRouter>
);

