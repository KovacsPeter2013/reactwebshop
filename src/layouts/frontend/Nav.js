
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link to="/" className="navbar-brand">Logo</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link  to="/rolunk" className="nav-link">Rólunk <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/kapcsolat" className="nav-link" >Kapcsolat</Link>
      </li>
  
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="keresés" aria-label="keresés" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Keresés</button>
    </form>
  </div>
</nav>
  )
}

export default Nav