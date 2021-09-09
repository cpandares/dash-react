
import { Redirect, Route, Switch } from 'react-router';
import RoadSideScreen from '../components/store/RoadSideScreen';



export const GlobalRouter = ()=>{

    return (

        <div>

            <Switch>

                <Route exact path="/store/road-side" component = { RoadSideScreen } />

            

                <Redirect to="/" />

            </Switch>
        </div>
    )


}