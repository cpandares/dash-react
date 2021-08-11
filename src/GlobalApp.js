import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


export const GlobalApp = ()=>{

    return (

        <Provider store={ store }>

            <AppRouter />

        </Provider>

        
        
    )


}