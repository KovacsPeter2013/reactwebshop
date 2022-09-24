
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


const Register = () => {



  const isLogin = localStorage.getItem('auth_token');

  if(isLogin){
    window.location.href ='admin/dashboard';
    Register = false;
  }






  const redirect = () =>{
    window.location.href = "/bejelentkezes";
  }

  const [registerInput, setRegister] = useState({
    name: '',
    email: '', 
    password: '',
    error_list : []
  })  

  const handleInput = (e) =>{
    e.persist();
    setRegister({...registerInput, [e.target.name]: e.target.value});
  }

  const registerSubmit = (e) =>{
    e.preventDefault();

    const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`/api/register`, data).then(res => {
      console.log("Adatok",res.data)

      if(res.data.status === 200){

        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal("Sikeres regisztráció (React)",{ icon: "success",});
        setTimeout(function(){redirect()}, 4000);

        
      }else{
        console.log("Adatok",res.data)
        setRegister({...registerInput ,error_list: res.data.validation_errors})
        
        swal("Sikertelen regisztráció(React)", {icon: "warning"});


      }

    });
    });

  }

  return (
   <div className="hold-transition register-page">
    <div className="register-box">
    <div className="register-logo">
      <Link to="#">Regisztráció</Link>
    </div>
  
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Új tag regisztrálás</p>
  
        <form onSubmit={registerSubmit} action="" method="post">
          <div className="input-group mb-3">
            <input onChange={handleInput} value={registerInput.name} name="name" type="text" className="form-control" placeholder="Név"  required/>
            
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user"></span>
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input onChange={handleInput} value={registerInput.email} name="email" type="email" className="form-control" placeholder="Email cím" required />
           
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input onChange={handleInput} value={registerInput.password} name="password"  type="password" className="form-control" placeholder="Jelszó" required />
           
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
   
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
                <label for="agreeTerms" required>
                 Egyetértek a <br/>
                 <Link to="#">Felhasználási feltételekkel</Link>
                </label>
              </div>
            </div>
          
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Elküld</button>
            </div>
          
          </div>
        </form>
  
        <div className="social-auth-links text-center">
          <p>- VAGY -</p>
          <Link to="#"  className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2"></i>
            Regisztráció Facebook-al
          </Link>
          <Link to="#"  className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2"></i>
            Regisztráció Google+-al
          </Link>
        </div>
  
        <Link to="/bejelentkezes"  className="text-center">Már van fiókom</Link>
      </div>
     
    </div>
  </div>
  </div>
  )
}

export default Register