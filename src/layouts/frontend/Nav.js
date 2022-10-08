
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
      <li className="nav-item">
        <Link to="/kategoriak" className="nav-link" >Kategoriak</Link>
      </li>
  
    </ul>

<button style={{width: "3rem" , height: "3rem", border : "none" ,background : "none", marginRight: "20px"}}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="#3269a8"
            >
   <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 
   32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 
   288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 
   488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 
   24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 
   224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5
    512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
   </svg>
   <div className='bg-danger d-flex justify-content-center align-items-center' 
   style={{
    color:"white", 
     width: "25px", 
     height: "25px" ,
     position: "absolute", 
     borderRadius: "50%",
    //  top: "*50",
    //  bottom: "30", 
    //  left: "150",
      transform: "translate(100%, -85%)",
   
     }}>
        1
   </div>
</button>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="keresés" aria-label="keresés" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Keresés</button>
    </form>
  </div>
</nav>
  )
}

export default Nav