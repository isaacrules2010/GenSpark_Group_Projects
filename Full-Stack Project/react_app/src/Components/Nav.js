import React from 'react'
import '../App.css';

const baseUrl = "http://localhost:3000/";

export default function Nav() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">

            {/* <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler ">

                <span className="navbar-toggler-icon"></span>
            </button> */}



            <div className="collapse navbar-collapse d-grid justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href={baseUrl} className="nav-link active">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href={baseUrl + "characters"} className="nav-link">
                            Character List
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href={baseUrl + "characters/character"} className="nav-link">
                            Character Display
                        </a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <div className="nav-link 
                        dropdown-toggle" id="navbarDropDown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Login
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="Login">
                            <li><a href={baseUrl + "login"} className="dropdown-item">Login</a></li>
                            <li><a href={baseUrl + "newUser"} className="dropdown-item">Create New Account</a></li>
                            <li><a href={baseUrl + "logout"} className="dropdown-item">Logout</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href={baseUrl + "admin"} className="nav-link">
                            Admin
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  )
}
