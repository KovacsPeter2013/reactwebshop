
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  
    <footer className="container">
    <div className="float-right d-none d-sm-block">
      <b>Version</b> 3.0.2
    </div>
    <strong>Copyright &copy;  <Link href="#">Link</Link>.</strong> Minden jog fenntartva
  </footer>
  )
}

export default Footer