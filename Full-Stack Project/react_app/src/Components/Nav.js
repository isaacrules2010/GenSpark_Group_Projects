import React, { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const baseUrl = "http://localhost:3000/";

export default function Nav() {
    const [username, setUsername] = useState("Login");
    const [role, setRole] = useState([]);



    useEffect(() => {
        if(localStorage.getItem('token')!==null){
            setUsername(jwt_decode(localStorage.getItem('token').replace('Bearer ','')).sub);
            setRole(jwt_decode(localStorage.getItem('token').replace('Bearer ','')).scope);
        }
    },[role]);

    const logoutUser = () =>{
        localStorage.removeItem('token');
        window.location.href = baseUrl;
    }

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
                                {/*username + ' - ' + role*/}
                                {(role.includes('ROLE_ADMIN')) ? username + ' - admin' : ((role.includes('ROLE_USER')) ? username + ' - user' :username)}
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="Login">
                            <li><a href={baseUrl + "login"} className="dropdown-item">
                                {role.includes('ROLE_ADMIN') ? 'Login as User' : 'Login'}
                                </a>
                            </li>
                            <li><a href={baseUrl + "newUser"} className="dropdown-item">Create New Account</a></li>
                            <li><div className="dropdown-item" onClick={()=>logoutUser()}>Logout</div></li>
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
