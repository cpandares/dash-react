import React from 'react';
import HeaderScreen from '../shared/HeaderScreen';
import SidebarScreen from '../shared/SidebarScreen';


const Dashsboard = () => {
    return (
        <div id="wrapper">

          <SidebarScreen />

          <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <HeaderScreen />
                
            </div>

          </div>
    

        </div>
    );
};

export default Dashsboard;