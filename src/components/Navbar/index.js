import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{color: 'whitesmoke'}}>Full Stack Jake</a>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" style={{color: 'whitesmoke'}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" style={{color: 'whitesmoke'}}>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link" style={{color: 'whitesmoke'}}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;