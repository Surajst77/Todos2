import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >Todos List</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        <li className="nav-item">
          <Link to="/About"className="nav-link">About</Link>
        
        </li>
        
      </ul>
      <form className="d-flex">
      </form>
    </div>
  </div>
</nav>
  )
}
