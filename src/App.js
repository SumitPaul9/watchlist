import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
