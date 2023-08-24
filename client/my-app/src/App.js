import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubmitHouse from './components/SubmitHouse';
import HouseDetails from './components/HouseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/submit-house' Component={SubmitHouse}/>
        <Route path='/house-details' Component={HouseDetails}/>
      </Routes>
    </Router>
  );
}

export default App;
