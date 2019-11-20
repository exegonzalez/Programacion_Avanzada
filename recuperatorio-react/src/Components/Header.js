import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/tareas" className="navbar-brand">
                SPA Items Proyectos
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/tareas" className="nav-link">
                        Tareas    
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/nueva-tarea" className="nav-link">
                        Nueva Tarea
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header