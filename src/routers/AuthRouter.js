import { Redirect, Route, Switch } from 'react-router';
import CreateMilitaryAccount from '../components/auth/CreateMilitaryAccount';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';




export const AuthRouter = ()=>{


    return (

        <div>

            <Switch>


                <Route exact path="/auth/login" component = { LoginScreen } />

                <Route exact path="/auth/register" component = { RegisterScreen } />

                <Route exact path="/auth/create-military-account" component = { CreateMilitaryAccount } />
                
                <Redirect to="/auth/login" />

            </Switch>
        </div>
    )


}