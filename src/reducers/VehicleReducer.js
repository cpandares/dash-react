import { types } from '../types/types';

const initialState = {

    vehicles: [
        null
    ]

}

export const VehicleReducer = (state = initialState, action)=>{

    switch (action.type) {
        
        case types.createVehicleUser:
            return{
                ...state,
                vehicles: action.payload
            }
    
        default:
            return state;
    }

}