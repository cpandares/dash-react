


import React from 'react';

const SidebarScreen = () => {
    return (
        <div>
        <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                   {/*  <img id="logo" src="../assets/Logo.png" /> */}
                    </div>
                <div className="sidebar-brand-text mx-3">
                    <img id="logo" src="../Logo.png" />
                </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt" style={{ color:"white" }}></i>
                <span style={{ color:"white" }}>Dashboard</span></a>
            </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
            <a className="nav-link" href="https://thervadvisor.com/" target="_blank">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
            aria-expanded="true" aria-controls="collapseBootstrap">
            <i className="fas fa-shopping-cart"></i>
            <span>RV Products & Services</span>
            </a>
            <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded" style={{ color:"white !important" }}>
                    
                    <a className="collapse-item" href="#">Roadside Assitance</a>
                    <a className="collapse-item" href="#">Commercial Roadside <br /> Assistance</a>
                    <a className="collapse-item" href="#">Tire & Wheel</a>
                    <a className="collapse-item" href="#">GPS</a>
                    <a className="collapse-item" href="#">Extended Warranty</a>
                    <a className="collapse-item" href="#">Virtual Mechanic diagnostic</a>
                    <a className="collapse-item" href="#">RV & Auto Insurance</a>
                </div>
            </div>
        </li>
      

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#ordersCollapse"
            aria-expanded="true" aria-controls="ordersCollapse">
            <i className="fas fa-shopping-cart"></i>
            <span>Orders</span>
            </a>
            <div id="ordersCollapse" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="collapse-inner rounded">
                    {/* <h6 className="collapse-header">Bootstrap UI</h6> */}
                    <a className="collapse-item" href="#">My Orders</a>
                    <a className="collapse-item" href="#">My Question</a>
                
                </div>
            </div>
        </li>


        
       
       
       
        
       
        <hr className="sidebar-divider" />
       
        </ul>
        </div>
    );
};

export default SidebarScreen;