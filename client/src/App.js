import './App.css';
import NavbarTop from './components/NavbarTop'
import Home from './components/Homepage/Home'
import Crypto from './components/Cryptopage/Crypto'
import Auth from './components/Auth/Auth'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavbarTop />
      <div className="App">
        <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/crypto" exact component={Crypto} />
        <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </ Router>
  );
}

export default App;
