import React from "react";
import { Link } from 'react-router-dom';

import logo from '../imgs/logo.png'
import config from '../imgs/config.png'
import dashboard from '../imgs/dashboard.png'

export default function Nav(){
    return(
        <header className="mb-3">
            <div className="px-3 py-2 text-bg-dark border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" to={'/'}>
                    <img className="bi me-2" width={100} src={logo} alt="logo"/>
                    </Link>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link className="nav-link text-secondary" to={'/'}>
                                    <img className="bi d-block mx-auto mb-1 img_menu" style={{color: 'white'}} src={dashboard} alt="Dashboard"/>
                                    <h5 style={{color: 'white'}}>Dashboard</h5>
                                    
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link text-secondary" to={'/config'}>
                                    <img className="bi d-block mx-auto mb-1 img_menu" src={config} alt="Configuração"/>
                                    <h5 style={{color: 'white'}}>Configuração</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}