
import React from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from 'react-router-dom';
const UserNavbar = () => {

  const UserName = localStorage.getItem('auth_name');

    const logout = (e) =>{
        e.preventDefault();
        
        axios.post(`/api/logout`).then(res => {
      
          if(res.data.status === 200){
      
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal("Sikeres kilépés (React)",{ icon: "success",});
            setTimeout(function(){redirect()}, 2000);
          }
      
        });
      }
      const redirect = () =>{
        window.location.href = "/bejelentkezes";
      }





  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <Link to="#" className="navbar-brand" >Üdv {UserName}!</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link  to="/userhome" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/userprofil" className="nav-link">Profil</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Shop</Link>
      </li>
      <li className="nav-item dropdown ">
        <Link className="nav-link dropdown-toggle "  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Műveletek
        </Link>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" >Action</Link>
          <Link className="dropdown-item" >Another action</Link>
          <div className="dropdown-divider "></div>
          <button  onClick={logout} className="btn btbn-default">Kilépés</button>
        
        </div>
      </li>

    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Keresés" aria-label="Keresés" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Keresés</button>
    </form> */}
  </div>
</nav>
  )
}

export default UserNavbar