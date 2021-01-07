import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import AddNew from './containers/addnew/AddNew';
import Watched from './containers/watched/Watched';
import WatchList from './containers/watchlist/WatchList';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/add" component={AddNew}/>
              <Route exact path="/watched" component={Watched}/>
              <Route exact path="/watchlist" component={WatchList}/>
            </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
