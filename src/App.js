import './App.css';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Features />
    </div>
  );
}

export default App;
