import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Protiva <span>school center</span> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="total-team">
                <div className="container">
                    <h3>Make an Astounding Teachers Team</h3>
                    <p>The city is flying and we are fighting an army of robots, and I have a bow and arrow</p>
                    <h3>Total Budget: <span>100 Million</span> </h3>
                </div>
                <h2 className="page-title">Protiva</h2>
            </div>
        </div>
    );
};

export default Header;