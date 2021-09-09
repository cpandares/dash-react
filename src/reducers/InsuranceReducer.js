
import { types } from '../types/types';

const initialState = {
    insurance:[
        null
    ]
}

export const insuranceReducer = ( state = initialState, action )=>{


    switch (action.type) {
        
        case types.createInsurancePolice:
            return{
                ...state,
                insurance: action.payload
            }
    
        default:
            return state;
    }

}
