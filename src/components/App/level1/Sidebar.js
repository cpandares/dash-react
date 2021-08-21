


import React from 'react';
import { Link } from 'react-router-dom';

const SidebarScreen = () => {
    return (
        <div>
        <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-icon">
                   {/*  <img id="logo" src="../assets/Logo.png" /> */}
                    </div>
                <div className="sidebar-brand-text mx-3">
                    <img id="logo" src="../Logo.png" />
                </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-tachometer-alt" style={{ color:"white" }}></i>
                <span style={{ color:"white" }}>Dashboard Manager</span></a>
            </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
            <a className="nav-link" href="https://thervadvisor.com/" target="_blank">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>

        <li className="nav-item">
            <Link to="/panel/basic-data" className="nav-link" >
                <i class="fas fa-cogs"></i>
                <span>Basic Settings</span>
            </Link>
        </li>
      

        <li className="nav-item">
            <a className="nav-link" href="#" >
                <i class="fas fa-users"></i>
                <span>Manage Users</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" >
                <i class="fas fa-qrcode"></i>
                <span>Performance Report</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" >
                <i class="fas fa-cloud"></i>
                <span>Email Testing</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="ui-colors.html">
            <i class="fas fa-ticket-alt"></i>
            <span>Tickets</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="ui-colors.html">
            <i class="fas fa-database"></i>
            <span>Database Migration</span>
            </a>
        </li>
        {/* <hr className="sidebar-divider" /> */}

       
        
      
       
      
      
        </ul>
        </div>
    );
};

export default SidebarScreen;