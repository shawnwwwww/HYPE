import './App.css';
import Sidebar from './Components/Sidebar';
// import GameItem from './Components/GameItem';
import { AuthProvider } from './Contexts/AuthContext';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

// Pages
import Home from "./Pages/Home"
import GameDetail from "./Pages/GameDetail"
import Profile from './Pages/Profile'
import AllRelease from './Pages/AllReleases'

/* NOTES */
// Right now the default page goes to "/profile" due to something with
// history in SideBar.js I believe.

function App() {
  return (
    <div className="App">
      
        <Router>
          <AuthProvider>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/allreleases" component={AllRelease} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/gamedetail" component={GameDetail} />
                {/*Default page if the user manually changes path*/}
                <Route component={Home} />
                <Redirect to="/home" />
            </Switch>

            <Sidebar />
          </AuthProvider>
        </Router>
      
    </div>
  );
}

export default App;
