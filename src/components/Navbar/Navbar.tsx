import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Search from "../Search";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">SOHEIL Grocery Delivery System</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/delivery">Register Delivery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/product">Product List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/van">Van List</a>
                        </li>
                    </ul>
                    <form className="d-flex">

                        <a href="/search" className="btn btn-success" type="submit">Search</a>



                    </form>
                </div>
            </div>
        </nav>
    );
}



