import './App.css';
import NavbarTop from './components/NavbarTop'
import Home from './components/Homepage/Home'
import Crypto from './components/Cryptopage/Crypto'
import Auth from './components/Auth/Auth'
import Youtube from './components/YoutubePage/Youtube'
import NewsRender from './components/NewsPage/NewsRender'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavbarTop />
      <div className="App">
        <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/home" exact component={Home} />
        <Route path="/crypto" exact component={Crypto} />
        <Route path="/videos" exact component={Youtube} />
        <Route path="/news" exact component={NewsRender} />
        <Route path="/auth" exact component={Auth} />
        {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </ Router>
  );
}

export default App;
