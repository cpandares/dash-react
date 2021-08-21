
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
   
    Redirect
  } from "react-router-dom";


import { AppSreen } from "../components/App/AppScreen";


import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startChecking } from '../actions/auth';

import { AuthRouter } from "./AuthRouter";

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