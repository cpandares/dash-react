import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';




export const startSaveDependent = ( dependent )=>{

    return ( dispatch )=>{

        dispatch(saveDepentend(dependent))

    }

}


const saveDepentend = (dependent)=>({

    type: types.addDependentUser,
    payload: dependent

})