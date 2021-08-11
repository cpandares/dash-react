




import { Redirect, Route, Switch } from 'react-router';

import SidebarScreen from '../../../shared/SidebarScreen';
import BasicData from './BasicData';
import Dashsboard from './DashScrenn';
import HeaderScreen from './HeaderScreen';



export const AppLevel5Screen = ()=>{

    return ( 
        <div>
           
          
            <Switch>

                <Route exact path="/" component = { Dashsboard } />            
                <Route exact path="/panel/basic-data" component = { BasicData } />

                <Redirect to="/" />

            </Switch>

           

        </div>
    )


}