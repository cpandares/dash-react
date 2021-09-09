import React from 'react';
import { useSelector } from 'react-redux';


import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';
import { Link } from "react-router-dom";


const Dashsboard = () => {

    const { user } = useSelector( state=>state.auth );
    
    const fecha = new Date().getFullYear();


    return (
        <div id="wrapper">

          <SidebarScreen />

          <div id="content-wrapper" className="d-flex flex-column">

          

            <div id="content">

                <HeaderScreen />    

                <div className="container my-4">
                  <h5 > <b>Welcome back  </b> { user.name } - Your membership is: 30255 </h5>
                </div>           

                <div class="card-group container">
                
                    <div class="card mr-1 p-1 rounded">
                      <img src="../assets/rvplans.jpg" alt="Plans" />
                      <div class="card-body">
                        <h5 class="card-title">RV Advisor's Motorclub Products and Services</h5>
                        
                       
                      </div>
                      <div className="cusBtnH">
                        <a href="#" className="ml-4">
                          <button className=" btn btn-outline-primary rounded-pill">Roadside Assistance</button>
                        </a>
									      <a href="#" className="ml-1">
										      <button className=" btn btn-outline-primary  rounded-pill">Tire and Wheel</button>
									      </a>
							      	</div>
                    </div>

                    <div class="card p-1 rounded">
                      <img src="../assets/coupons.jpg" alt="coupons" />
                      <div class="card-body">
                        <h5 class="card-title">Get Coupons and Discounts</h5>
                        <p>Download coupons and start enjoying all the benefits that RV Advisor is bringing to you!!</p>
                      </div>

                      <div className="cusBtnH ">                        
                        <Link to="/panel/discounts" >
                            <button className=" btn btn-outline-primary btn-block rounded-pill">Get Coupons</button>
                        </Link>
							      	</div>

                    </div>

                    <div class="card ml-1 p-1 rounded">
                       <img src="../assets/annon.jpg" alt="plans" />
                      <div class="card-body">
                        <h5 class="card-title">Announcements and latest News</h5>                       
                        
                      </div>

                      <div className="cusBtnH">
                        <a  href="https://thervadvisor.com/joincommunity/all-blog-posts/"><button className="btn btn-outline-primary ml-2 rounded-pill">RV Advisor Blog</button></a> 
                        <a href="https://thervadvisor.com/about-gigi/just-ask-gigi/"><button className=" btn btn-outline-primary ml-2 rounded-pill">Just Ask GIGI Show</button></a>
                        <a href="https://thervadvisor.com/joincommunity/rv-and-camping-podcast/"><button className=" btn btn-outline-primary ml-2 mt-1 rounded-pill">RVA Podcast</button></a>
								      </div>

                    </div>
                 </div>
                
            </div>
            <p className="text-center"> <b> { fecha }  </b>  <i classname="far fa-copyright"></i>RV-Advisor</p>
          </div>
    
       
        </div>
    );
};

export default Dashsboard;