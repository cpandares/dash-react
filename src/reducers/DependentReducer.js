import { types } from "../types/types"

const initialState = {
    dependent:[
        null
    ]
}


export const DependentReducer = ( state=initialState, action )=>{

    switch (action.type) {
        
        case types.addDependentUser:
        return{
            ...state,
            dependent: action.payload
        }
    
        default:
            return state;
    }

}