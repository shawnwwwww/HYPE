import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import GameItem from './Components/GameItem'
import React from 'react';



import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"

// Pages
import Home from "./Pages/Home"
import GameDetail from "./Pages/GameDetail"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/allreleases" component={Home} />
          <Route exact path="/profile" component={GameDetail} />
          <Route exact path="/gamedetail" component={GameDetail} />
          {/*Default page if the user manually changes path*/}
          <Route component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
