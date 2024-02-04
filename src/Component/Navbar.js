import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
export default function Navbar() {
  const amount = useSelector(state => state.amount);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop">
                  Priyanshu Bank
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>


            </ul>
              <div>
                <button disabled className='btn-primary'>Your Balance is {amount}</button>
              </div>
          </div>
        </div>
      </nav>

    </div>

  )
}
