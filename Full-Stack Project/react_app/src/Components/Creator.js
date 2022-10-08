import React from 'react';
import LoginForm from "../Components/LoginForm";
import '../Style.css';
const baseUrl = "http://localhost:3000/";


export default function Creator(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebar"
                        aria-controls="offcanvasExample"
                    >
                        <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                    </button>
                    <a
                        className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
                        href={baseUrl + "admin"}
                    >Admin Control
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#topNavBar"
                        aria-controls="topNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="topNavBar">
                        <form className="d-flex ms-auto my-3 my-lg-0">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-primary" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle ms-2"
                                    href={baseUrl + "admin"}
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-fill"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href={baseUrl}>Home</a>
                                    </li>
                                    <li><a className="dropdown-item" href={baseUrl + "login"}>Login</a></li>
                                    <li><a className="dropdown-item" href={baseUrl + "logout"}>Logout</a></li>
                                    <li>
                                        <a className="dropdown-item" href={baseUrl + "newUser"}>Create New User</a>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className="offcanvas offcanvas-start sidebar-nav bg-dark"
                tabIndex="-1"
                id="sidebar">
                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    Home
                                </div>
                            </li>
                            <li>
                                <a href={baseUrl + "admin"} className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    Character List
                                </div>
                            </li>
                            <li>
                                <a
                                    href={baseUrl + "characters"} className="nav-link px-3 sidebar-link">
                                    <span className="me-2"><i className="bi bi-layout-split"></i></span>
                                    <span>Characters</span>
                                    <span className="ms-auto">
                                        <span className="right-icon">
                                            <i className="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>User Dashboard</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="bi bi-table me-2"></i></span> User Table
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            id="example"
                                            className="table table-striped data-table">
                                            <thead>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Email</th>
                                                    <th>Active</th>
                                                    <th>Role</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Email</th>
                                                    <th>Active</th>
                                                    <th>Role</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Character Dashboard</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="bi bi-table me-2"></i></span> Character Table
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            id="example"
                                            className="table table-striped data-table">
                                            <thead>
                                                <tr>
                                                    <th>Character Id</th>
                                                    <th>User</th>
                                                    <th>Character Name</th>
                                                    <th>Character Class</th>
                                                    
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr>
                                                    <th>Character Id</th>
                                                    <th>User</th>
                                                    <th>Character Name</th>
                                                    <th>Character Class</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Character Stats Dashboard</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="bi bi-table me-2"></i></span> Character Table
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            id="example"
                                            className="table table-striped data-table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Strength</th>
                                                    <th>Dexterity</th>
                                                    <th>Constitution</th>
                                                    <th>Wisdom</th>
                                                    <th>Intelligence</th>
                                                    <th>Charisma</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Strength</th>
                                                    <th>Dexterity</th>
                                                    <th>Constitution</th>
                                                    <th>Wisdom</th>
                                                    <th>Intelligence</th>
                                                    <th>Charisma</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="./js/bootstrap.bundle.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.2/dist/chart.min.js"></script>
            <script src="./js/jquery-3.5.1.js"></script>
            <script src="./js/jquery.dataTables.min.js"></script>
            <script src="./js/dataTables.bootstrap5.min.js"></script>
            <script src="./js/script.js"></script>
        </div>


)}

    
