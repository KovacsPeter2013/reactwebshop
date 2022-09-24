
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'




const Navbar = () => {

  const redirect = () =>{
    window.location.href = "/bejelentkezes";
  }




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






  return (
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
   
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="#" class="nav-link" data-widget="pushmenu"><i class="fas fa-bars"></i></Link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="#" class="nav-link">Kezdőlap</Link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <Link to="#" class="nav-link">Kapcsolat</Link>
      </li>
    </ul>

  
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Keresés" aria-label="Search"/>
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    
    <ul class="navbar-nav ml-auto">
   
      <li class="nav-item dropdown">
        <Link to="#" class="nav-link" data-toggle="dropdown" >
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </Link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <Link to="#" class="dropdown-item">
           
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
         
          </Link>
          <div class="dropdown-divider"></div>
          <Link to="#" class="dropdown-item">
          
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
           
          </Link>
          <div class="dropdown-divider"></div>
          <Link to="#"  class="dropdown-item">
           
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
           
          </Link>
          <div class="dropdown-divider"></div>
          <Link to="#"  class="dropdown-item dropdown-footer">See All Messages</Link>
        </div>
      </li>
     
      <li class="nav-item dropdown">
        <Link to="#" class="nav-link" data-toggle="dropdown">
          <i class="fa fa-sign-out"></i>
         
        </Link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right text-center">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <button onClick={logout} className='btn btbn-default' type='button' >Kilépés</button>
        </div>
      </li>   
    </ul>
  </nav>
  )
}

export default Navbar