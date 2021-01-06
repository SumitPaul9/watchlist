import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css';
import Card from './components/card/Card';
import { GlobalProvider } from './context/GlobalState';
import AddNew from './containers/addnew/AddNew';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Navbar/>
          <AddNew/>
          {/* <Card/> */}

          <Switch>

          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
