
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'






const Login = () => {

  const [loginInput, setLogin] = useState({

    email: '',
    password: '',
  })  

  const handleInput = (e) =>{
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value })
  }
  
  
  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {

      email: loginInput.email,
      password: loginInput.password,
      error_list: [],

    }
    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`/api/login`, data).then(res => {

      if(res.data.status === 200){
        
        swal("Sikeres belépés (React)",{ icon: "success",});
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        
      }else if (res.data.status === 401){
        
        swal("Email vagy jelszó nem stimmel!",{ icon: "warning",});

      }else{
        
        setLogin({...loginInput, error_list: res.data.validation_errors })
        
      }
    });
    });



  }

  return (
  <div className='hold-transition login-page'>
    <div className="login-box">
    <div className="login-logo">
      <Link to="#">Bejelentkezés</Link>
    </div>
  
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Belépés az admin felületre</p>
  
        <form onSubmit={loginSubmit}>
          <div className="input-group mb-3">
            <input onChange={handleInput} value={loginInput.email} name="email" type="email" className="form-control" placeholder="Email" required/>
            {/* <span>{loginInput.error_list.email}</span> */}
            <div className="input-group-append"> 
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input  onChange={handleInput} value={loginInput.password} name="password" type="password" className="form-control" placeholder="Jelszó" required/>
            {/* <span>{loginInput.error_list.password}</span> */}
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember"/>
                <label for="remember">
                  Emlékezz rám
                </label>
              </div>
            </div>
         
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Belépés</button>
            </div>
          
          </div>
        </form>
  
        <div className="social-auth-links text-center mb-3">
          <p>- VAGY-</p>
          <Link to="#" href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2"></i> Belépés Facebook-al
          </Link>
          <Link to="#" href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2"></i> Belépés Google+-al
          </Link>
        </div>
      
  
        <p className="mb-1">
          <Link to="#" href="forgot-password.html">Elfelejtettem a jelszavam</Link>
        </p>
        <p className="mb-0">
          <Link to="/regisztracio" className="text-center">Még nincs regisztrációd?</Link>
        </p>
      </div>
     
    </div>
  </div>
  </div>
  )
}

export default Login