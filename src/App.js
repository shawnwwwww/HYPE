import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import GameItem from './Components/GameItem'
import ActivityRankCard from './Components/ActivityRankCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col> <Sidebar /> </Col>
          <Col>
            <Row md={1} xl={2}>
              <Col as={ActivityRankCard}>  </Col>
              <Col as={ActivityRankCard}>  </Col>
            </Row>
            <Row>
              <Col as={GameItem}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
