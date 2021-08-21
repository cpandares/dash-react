


import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../../actions/auth';

const SidebarScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = ()=>{

        dispatch(startLogout());

    }

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
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Dashboard Support</span></a>
                </li>

            <hr className="sidebar-divider" />

            <li className="nav-item">
                <a className="nav-link" href="https://thervadvisor.com/" target="_blank">
                    <i className="fas fa-home" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Orders & Suscriptions</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-cogs" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Manage Users</span>
                </a>
            </li>
        

            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-users" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Legal Club</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="ui-colors.html">
                <i class="fas fa-ticket-alt" style={{ color:"white" }}></i>
                <span style={{ color:"white" , fontFamily: 'serif' }}>Create Coupon</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-exclamation" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Product Questions</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-envelope"  style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Messages</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-folder" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Messages Archivied</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" >
                    <i class="fas fa-clipboard-list" style={{ color:"white" }}></i>
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Tickets</span>
                </a>
            </li>

            <li className="nav-item">
                <Link className="nav-link" onClick = { handleLogout } >
                    <i class="fas fa-sign-out-alt" style={{ color:"white" }}></i> 
                    <span style={{ color:"white" , fontFamily: 'serif' }}>Logout</span>
                </Link>
            </li>


        </ul>
    </div>
    );
};

export default SidebarScreen;