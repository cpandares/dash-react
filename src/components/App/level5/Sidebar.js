


import React from 'react';
import { Link } from 'react-router-dom';

const SidebarScreen = () => {
    return (
        <div>
        <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                   {/*  <img id="logo" src="../assets/Logo.png" /> */}
                    </div>
                <div className="sidebar-brand-text mx-3">
                    <img id="logo" src="../Logo.png" />
                </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt" style={{ color:"white" }}></i>
                <span style={{ color:"white" }}>Dashboard</span></Link>
            </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
            <a className="nav-link" href="https://thervadvisor.com/" target="_blank">
                <i className="fas fa-home"></i>
                <span style={{ color:"white" }}>Home</span>
            </a>
        </li>

        <li className="nav-item" >
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
            aria-expanded="true" aria-controls="collapseBootstrap">
            <i className="fas fa-cubes"></i>
            <span style={{ color:"white" }}>RV Products & Services</span>
            </a>
            <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded" style={{ color:"white !important" }}>
                    
                    <Link className="collapse-item" to="/store/roadside">Roadside Assitance</Link>
                   {/*  <Link className="collapse-item" href="#">Commercial Roadside <br /> Assistance</Link> */}
                    <Link className="collapse-item" to = "/store/gps">GPS</Link>
                    <Link className="collapse-item" to="/store/extendedwarranty">Extended Warranty</Link>
                    <Link className="collapse-item" to="/store/virtualmechanic">Virtual Mechanic diagnostic</Link>
                    <Link className="collapse-item" href="#">RV & Auto Insurance</Link>
                    <Link className="collapse-item" to="/store/tirewheel">Tire & Wheel</Link>
                </div>
            </div>
        </li>

        <li className="nav-item">
            <Link className="nav-link"to="#" target="_blank">
                <i className="fas fa-dolly-flatbed"></i>
                <span style={{ color:"white" }}>Shopiing Cart</span>
            </Link>
        </li>
      

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#ordersCollapse"
            aria-expanded="true" aria-controls="ordersCollapse">
            <i className="fas fa-cart-arrow-down"></i>
            <span style={{ color:"white" }}>Orders</span>
            </a>
            <div id="ordersCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <a className="collapse-item" href="#">My Orders</a>
                    <a className="collapse-item" href="#">My Question</a>
                
                </div>
            </div>
        </li>

        <li className="nav-item">
            <Link className="nav-link " to="/panel/discounts" >
                <i className="fas fa-tags"></i>
                <span style={{ color:"white" }}>Resources</span>
            </Link>
           
        </li>


        
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#socialCollapse"
            aria-expanded="true" aria-controls="socialCollapse">
            <i className="fas fa-users"></i>
            <span style={{ color:"white" }}>Social</span>
            </a>
            <div id="socialCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="#">Profile</Link>
                    <Link className="collapse-item" to="#">Feeds</Link>
                    <Link className="collapse-item" to="#">Invite Friends</Link>
                    <Link className="collapse-item" to="#">Chat</Link>
                </div>
            </div>
        </li>
       
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#socialCollapse"
            aria-expanded="true" aria-controls="socialCollapse">
            <i className="fas fa-users"></i>
            <span style={{ color:"white" }}>Search Members</span>
            </a>
            <div id="socialCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="#">Membes</Link>
                    <Link className="collapse-item" to="#">Professionals</Link>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#meetCollapse"
            aria-expanded="true" aria-controls="meetCollapse">
            <i className="fas fa-calendar"></i>
            <span style={{ color:"white" }}>Meetups</span>
            </a>
            <div id="meetCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="#">Your Groups</Link>
                    <Link className="collapse-item" to="/panel/create-event">Create Event</Link>
                    <Link className="collapse-item" to="#">Find Events</Link>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#rigsCollapse"
            aria-expanded="true" aria-controls="rigsCollapse">
            <i className="fas fa-bus" ></i>
            <span style={{ color:"white"  }}>My Rigs</span>
            </a>
            <div id="rigsCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="/panel/addvehicle">Add New Vehicle</Link>
                    <Link className="collapse-item" to="#">View my Vehicles</Link>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#dependentCollapse"
            aria-expanded="true" aria-controls="dependentCollapse">
            <i className="fas fa-users"></i>
            <span style={{ color:"white" }}>Dependents</span>
            </a>
            <div id="dependentCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="add-new-dependent">Add New Dependent</Link>
                    <Link className="collapse-item" to="#">My family members</Link>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#rvcaCollapse"
            aria-expanded="true" aria-controls="rvcaCollapse">
            <i className="fas fa-users"></i>
            <span style={{ color:"white" }}>RVCA</span>
            </a>
            <div id="rvcaCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <a className="collapse-item" href="https://panel.rvaca.org/BecomeMember" target="_blank">Register your RV in RVCA</a>
                    <a className="collapse-item" href="https://panel.rvaca.org/Donate">Support the RVCA</a>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#basicdataCollapse"
            aria-expanded="true" aria-controls="basicdataCollapse">
            <i className="fas fa-users"></i>
            <span style={{ color:"white" }}>Basic Data</span>
            </a>
            <div id="basicdataCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <Link className="collapse-item" to="#">Payment Info</Link>
                    <Link className="collapse-item" to="#">My address</Link>
                    <Link className="collapse-item" to="#">Basic Data</Link>
                    <Link className="collapse-item" to="/panel/add-insurance-policies">Insurance Polices</Link>
                 
                </div>
            </div>
        </li>

        <li className="nav-item">
            <Link className="nav-link " to="#" >
                <i className="fas fa-users"></i>
                <span style={{ color:"white" }}>Need Support</span>
            </Link>
           
        </li>
        
       
        <hr className="sidebar-divider" />
       
        </ul>
        </div>
    );
};

export default SidebarScreen;