import React from 'react';
import { useSelector } from 'react-redux';


import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';



const Dashsboard = () => {

     const { user } = useSelector( state=>state.auth );

    return (
        <div id="wrapper">

          <SidebarScreen />

          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <HeaderScreen />
                <div className="container my-4">
                  <h5 > <b>Welcome back  </b> { user.name }  </h5>
                </div>   
                <div class="card-group container">
                   
                    <div class="card mr-1">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample64.jpg" alt="Plans" />
                      <div class="card-body">
                        <h5 class="card-title">Store</h5>
                        
                      </div>

                    </div>
                    <div class="card">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample64.jpg" alt="coupons" />
                      <div class="card-body">
                        <h5 class="card-title">Manage Users</h5>
                       
                      </div>
                    </div>
                    <div class="card ml-1">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample64.jpg" alt="coupons" />
                      <div class="card-body">
                        <h5 class="card-title">Bussiness Network</h5>
                       
                      </div>
                    </div>
                 </div>
                
            </div>

          </div>
    

        </div>
    );
};

export default Dashsboard;