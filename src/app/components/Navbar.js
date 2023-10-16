import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid">
        <a className="navbar-brand brandName" href="#">
          logo
        </a>
        <button
          className="navbar-toggler bar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
          <span className="navbar-toggler-icon" />
        </button>
        <i className="fa fa-bars text-white tog"></i>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-5">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Our Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Affliate
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex navBtnGroup">
            <span>Login</span>
            <span className="activeButton">Sign up</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar