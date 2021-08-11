import { types } from "../types/types";


const initialState = {
    checking:true,
    ok:false,
    user:{}
    
}

export const UserReducer = ( state = initialState, action )=>{

        switch (action.type) {
            
           

             case types.updateUser:
                return{
                    ...state,
                    user: state.user.map(
                        u=> (u.id=== action.payload.id) ? action.payload.id : u 
                    )
                }
 
                     
            case types.finishChecking:
                return{
                    ...state,                                        
                    checking:false,
                    ok:false
                }
                
        
            default:
                return state;
        }


}