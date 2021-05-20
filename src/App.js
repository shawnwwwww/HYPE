import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import GameItem from './Components/GameItem'
import ActivityRankCard from './Components/ActivityRankCard'
import ActivityHypeListCard from './Components/ActivityHypeListCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='AppContainer'>
          <div className='ActivityCards'>
            <ActivityRankCard />
            <ActivityHypeListCard />

          </div>


      </div>
      
    </div>
  );
}

export default App;
