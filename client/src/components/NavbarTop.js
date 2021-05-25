import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory,useLocation } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/auth';


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
    <a className="navbar-brand" href="/home">FINAN$E</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/crypto">Crypto</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        {user ? (
          <>
           <li className="nav-item">
            <a className="nav-link">Hi, {user.result.name} </a>
           </li>
           <button class="btn btn-sm btn-outline-secondary" type="button" onClick={logout}>Logout</button>
           </ >
        ) : (
          <button onClick={() => history.push('/auth')} class="btn btn-sm btn-outline-success" type="button">Sign In</button>
        )}
       
      </ul>
    </div>
  </div>
</nav>
    </ >
  )
}

export default NavWrapper
