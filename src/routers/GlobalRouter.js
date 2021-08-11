
import { Redirect, Route, Switch } from 'react-router';

import { AppSreen } from '../components/App/AppScreen';
import { AppScreen } from '../components/App/level3/AppScreen';

export const GlobalRouter = ()=>{

    return (

        <div>

            <Switch>

                <Route exact path="/" component = { AppSreen } />

                <Route exact path="/home" component = { AppScreen } />

                <Redirect to="/" />

            </Switch>
        </div>
    )


}