import React from 'react';


import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';



const Dashsboard = () => {
    return (
        <div id="wrapper">

          <SidebarScreen />

          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <HeaderScreen />

                <div class="card-group container">
                    <div class="card mr-1">
                    <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                    <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                    <div class="card ml-1">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                 </div>
                
            </div>

          </div>
    

        </div>
    );
};

export default Dashsboard;