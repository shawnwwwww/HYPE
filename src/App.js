import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import GameItem from './Components/GameItem'
import ActivityRankCard from './Components/ActivityRankCard'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <GameItem />
      <ActivityRankCard />
    </div>
  );
}

export default App;
