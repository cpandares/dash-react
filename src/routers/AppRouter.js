
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from "react-router-dom";


import { AppSreen } from "../components/App/AppScreen";


import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startChecking } from '../actions/auth';

import { AuthRouter } from "./AuthRouter";
import { GlobalRouter } from "./GlobalRouter";

import RoadSideScreen from "../components/store/RoadSideScreen";
import TireAndWheelScreen from "../components/store/TireAndWheelScreen";
import GpsScreen from "../components/store/GpsScreen";
import ExtendedWarrantyScreen from "../components/store/ExtendedWarrantyScreen";
import VirtualMechanicScreen from "../components/store/VirtualMechanicScreen";
import LegalClubScreen from "../components/store/LegalClubScreen";

export const AppRouter = ()=>{

    const dispatch = useDispatch();

    
    const { checking, user  } = useSelector( state=>state.auth );


    useEffect(()=>{

        dispatch(startChecking());

    },[dispatch])

 
    console.log(user)

   
   
   if(checking){
       return <h5>please wait...</h5>
   }
  
    return (


        <Router>

            <div>

                <Switch>

                    <Route exact path="/store/roadside" component = { RoadSideScreen } />
                    <Route exact path="/store/tirewheel" component = { TireAndWheelScreen }/>
                    <Route exact path="/store/gps" component = { GpsScreen }/>
                    <Route exact path="/store/extendedwarranty" component = { ExtendedWarrantyScreen } />
                    <Route exact path="/store/virtualmechanic" component = { VirtualMechanicScreen } />
                    <Route exact path="/store/legalclub" component = { LegalClubScreen } />
                    
                    <PublicRoute

                        path = "/auth"
                        component = { AuthRouter }
                        isAuth = { !!user }

                    />
                    
                    <PrivateRoute

                        
                        path = "/"
                        component = { AppSreen }
                        isAuth = { !!user }

                    />

                    

                    <Redirect to="/auth/login" />

                </Switch>

            </div>


        </Router>
    )


}