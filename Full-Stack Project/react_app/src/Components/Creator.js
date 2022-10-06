import React from 'react';
import LoginForm from "../Components/LoginForm";
import '../Style.css';
const baseUrl = "http://localhost:3000/";


export default function Creator(){
    return(
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebar"
                        aria-controls="offcanvasExample"
                    >
                        <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                    </button>
                    <a
                        class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
                        href={baseUrl + "admin"}
                    >Admin Control
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#topNavBar"
                        aria-controls="topNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="topNavBar">
                        <form class="d-flex ms-auto my-3 my-lg-0">
                            <div class="input-group">
                                <input
                                    class="form-control"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search" />
                                <button class="btn btn-primary" type="submit">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle ms-2"
                                    href={baseUrl + "admin"}
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-person-fill"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href={baseUrl + "login"}>Login</a></li>
                                    <li><a class="dropdown-item" href={baseUrl + "logout"}>Logout</a></li>
                                    <li>
                                        <a class="dropdown-item" href={baseUrl + "newUser"}>Create New User</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                class="offcanvas offcanvas-start sidebar-nav bg-dark"
                tabindex="-1"
                id="sidebar">
                <div class="offcanvas-body p-0">
                    <nav class="navbar-dark">
                        <ul class="navbar-nav">
                            <li>
                                <div class="text-muted small fw-bold text-uppercase px-3">
                                    Home
                                </div>
                            </li>
                            <li>
                                <a href={baseUrl + "admin"} class="nav-link px-3 active">
                                    <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
                            <li>
                                <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    Character List
                                </div>
                            </li>
                            <li>
                                <a
                                    href={baseUrl + "characters"} class="nav-link px-3 sidebar-link">
                                    <span class="me-2"><i class="bi bi-layout-split"></i></span>
                                    <span>Characters</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <main class="mt-5 pt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>User Dashboard</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="card">
                                <div class="card-header">
                                    <span><i class="bi bi-table me-2"></i></span> User Table
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table
                                            id="example"
                                            class="table table-striped data-table">
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
            <main class="mt-5 pt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>Character Dashboard</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="card">
                                <div class="card-header">
                                    <span><i class="bi bi-table me-2"></i></span> Character Table
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table
                                            id="example"
                                            class="table table-striped data-table">
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
            <main class="mt-5 pt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>Character Stats Dashboard</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="card">
                                <div class="card-header">
                                    <span><i class="bi bi-table me-2"></i></span> Character Table
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table
                                            id="example"
                                            class="table table-striped data-table">
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
        </body>


)}

    
