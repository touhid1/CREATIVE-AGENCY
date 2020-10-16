import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser.email);
  const [user, setUser] = useState({});//user = customer or admin
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser,user,setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/login'>
            <Login/> 
          </Route>

          {/* Private Route Korte Hobe */}
          <PrivateRoute path={`/user/:userServiceKey`}>
            <User/>
          </PrivateRoute>
          
          <PrivateRoute path='/user/admin'>
            <User/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
