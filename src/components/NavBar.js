// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1 text-black" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav px-3">
            <li className="nav-item"><Link className="nav-link text-black" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link text-black" to="/technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar







