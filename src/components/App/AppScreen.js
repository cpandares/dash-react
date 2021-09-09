
import {  useSelector } from 'react-redux';

import { AppLevel1Screen } from './level1/AppLevel1';
import { AppLevel3Screen } from './level3/AppLevel3';
import { AppLevel4Screen } from './level4/AppLevel4';
import { AppLevel5Screen } from './level5/AppLevel5';



export const AppSreen = ()=>{

  
    const { user } = useSelector( state=>state.auth );

    const level = user['idUserLevel'];  
  

    return ( 
        <div>

           {    
                level == 5 &&
               <AppLevel5Screen /> 

           }

            {    
                level == 3 &&
                <AppLevel3Screen /> 
                
            }

            {    
                level == 4 &&
                <AppLevel4Screen /> 
                
            }

           
            {    
                level == 1 &&
                <AppLevel1Screen /> 
                
            }
           

        </div>
    )


}