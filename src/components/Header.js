import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='fixed-top'>
        <nav className="navbar navbar-expand-sm navbar-primary bg-info mt-2 pt-2">
            <div className="container-fluid">
                <a className="navbar-brand"><i className="fa-solid fa-road"></i><b>Road Transport Dept</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa-solid fa-clipboard-list"></i> <b>Vehicle Registration</b></a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/Applyreg' className="dropdown-item"> New registration</Link></li>
                                    <li><Link to='/Viewreg' className="dropdown-item"> View RC</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa-solid fa-car"></i><b>License</b></a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/Applylic' className="dropdown-item" > New License</Link></li>
                                    <li><Link to='/Viewlic'a className="dropdown-item" > view License</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa-solid fa-truck-front"></i><b>Permits</b></a>
                                <ul className="dropdown-menu">
                                    <li><Link to='/Applypre' className="dropdown-item">New permit</Link></li>
                                    <li><Link to='/Viewpre' className="dropdown-item">View permit</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/Citizen' className="nav-link" ><i className="fa-solid fa-house"></i> <b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link" ><i className="fa-solid fa-user"></i> <b>Log out</b></Link>
                            </li>
                        </ul>
                </div>    
            </div>
        </nav>
    </div>
  )
}
