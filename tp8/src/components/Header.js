import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link 
                to="/topartistas"
                className="navbar-brand"
            >
                React FM
            </Link>
            <Link
                to="/toptracks"
                className="btn btn-like"
            >
                Top Tracks
            </Link>
            <Link 
                to="/albums"
                className="btn btn-like"
            >
                Top Albums
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </header>
)

export default Header;