import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  Priyanshu Bank
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">
                  About
                </a>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </div>

  )
}
