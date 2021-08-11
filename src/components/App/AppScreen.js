import { useSelector } from 'react-redux';
import { AppLevel5Screen } from './level5/AppLevel5';




/* import { AppScreenLevel3 } from './level3/AppScreen';
import { AppScreenLevel1 } from './level1/AppScreen';
import { AppScreenLevel4 } from './level4/AppScreen'; */


export const AppSreen = ()=>{

    const {  user  } = useSelector( state=>state.auth );

    const level = user.user['idUserLevel'];
  

    return ( 
        <div>

           {    
                level == 5 &&
               <AppLevel5Screen /> 

           }

            {/* {    
                level == 3 &&
                <AppScreenLevel3 /> 
                
            }

            {    
                level == 4 &&
                <AppScreenLevel4 /> 
                
            }


            {    
                level == 1 &&
                <AppScreenLevel1 /> 
                
            } */}
           

        </div>
    )


}