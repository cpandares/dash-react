

import { Redirect, Route, Switch } from 'react-router';



import Dashsboard from './DashScrenn';
import HeaderScreen from './HeaderScreen';
import LegalData from './LegalData';



export const AppLevel4Screen = ()=>{

    return ( 
        <div>
           
          
            <Switch>

                <Route exact path="/" component = { Dashsboard } />            
                <Route exact path="/panel/legal" component = { LegalData } />

                <Redirect to="/" />

            </Switch>

           

        </div>
    )


}