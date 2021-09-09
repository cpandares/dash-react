import React from 'react';

import { Link } from "react-router-dom";
import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';

const DiscountScreen = () => {
    return (
        <div id="wrapper">
            <SidebarScreen />
  
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <HeaderScreen />
        
                    <div className="page-wrapper">   

                        <div className="page-breadcrumb">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12 col">
                                    <h3 className="page-title">Rewards Club</h3>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="white-box p-4">  
                                <div className="row">
                    
                                    <div className="col-lg-6 col-md-12 shadow-sm p-3">
                                        <div className="card-image " >
                                            <h4 className="mb-3">Partners discounts</h4>

                                                <img className="img-fluid" src="../assets/login.jpg" />
                                            
                                        </div>
                                        <div className="card-content p-0">
                                            <div className="media"></div>
                                            <div className="content textCen">
                                                <Link className="button btn btn-outline-info mt-1" to="/panel/parnetsdiscounts">Click Here</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-12 shadow-sm p-3">
                                        <div className="card-image img-fluid" >
                                            <h4 className="mb-3 mt-2 mt-md-0">Travel and Rewards club</h4>
                                           
                                            <img className="img-fluid" src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                                            
                                        </div>
                                        <div className="card-content p-0">
                                            <div className="media"></div>
                                            <div className="content textCen">
                                                <Link className="btn btn-outline-info mt-1" to="/panel/travelrewardsclub">Click Here</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>    

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountScreen;