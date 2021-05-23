import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NavbarTop = () => {
  const user = null;
  const history = useHistory();

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
           <button class="btn btn-sm btn-outline-secondary" type="button">Logout</button>
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

export default NavbarTop
