import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory,useLocation, NavLink } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/auth';
import { Nav } from 'react-bootstrap';
import './Navbar.css';


const NavWrapper = () => {
  const store = createStore(authReducer);

  return (
    <Provider store={store}>
      <NavbarTop />
    </Provider>
  )
}

const NavbarTop = () => {
  const history = useHistory();
  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">FINANSE₹</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName= 'menu_active' className="ml-auto nav-link item_margin" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName= 'menu_active' className="nav-link item_margin" to="/crypto">Crypto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName= 'menu_active' className="nav-link item_margin" to="/videos">Videos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName= 'menu_active' className="nav-link item_margin" to="/news">News</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        {user ? (
          <>
           <li className="nav-item">
            <NavLink className="nav-link item_margin" to="/home">Hi, {user.result.name} </NavLink>
           </li>
           <button className="btn btn-sm btn-outline-secondary item_margin" type="button" onClick={logout}>Logout</button>
           </ >
        ) : (
          <button onClick={() => history.push('/auth')} className="btn btn-sm btn-outline-success item_margin" type="button">Sign In</button>
        )}
       
      </ul>
    </div>
  </div>
</nav>
    </ >
  )
}

export default NavWrapper
