
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';



import AddNewDependent from './AddNewDependent';
import AddNewVehicle from './AddNewVehicle';
import BasicData from './BasicData';
import CreateEventScreen from './CreateEventScreen';
import Dashsboard from './DashScrenn';
import DiscountScreen from './DiscountScreen';
import HeaderScreen from './HeaderScreen';
import InsurancePoliceScreen from './InsurancePoliceScreen';



export const AppLevel5Screen = ()=>{

    const dispatch = useDispatch();

  

    return ( 
        <div>
           
          
            <Switch>

                <Route exact path="/" component = { Dashsboard } />            
                <Route exact path="/panel/basic-data" component = { BasicData } />
                <Route exact path="/panel/discounts" component = { DiscountScreen } />
                <Route exact path="/panel/addvehicle" component = { AddNewVehicle } />
                <Route exact path="/panel/add-insurance-policies" component = { InsurancePoliceScreen } />
                <Route exact path="/panel/add-new-dependent" component = { AddNewDependent } />
                <Route exact path="/panel/create-event" component = { CreateEventScreen } />
                <Redirect to="/" />

            </Switch>

           

        </div>
    )


}