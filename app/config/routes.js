// Include the React library
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../components/Header';
import LogIn from '../components/LogIn';
import NewUser from '../components/NewUser';

export default () => (
  <BrowserRouter basename='/'>

    <Header/>
    
      <Route path="/login" component={LogIn}>
        <Route path="/newuser" component={NewUser}/>
      </Route>

  </BrowserRouter>
);


// export default () => (
//   <Router>

//     <Header/>
    
//       {/* <Route path="/users/:id" component={User}/> */}
//       <Route path="/login" component={LogIn}>
//         <Route path="/newuser" component={NewUser}/>
//       </Route>

//   </Router>
// );
