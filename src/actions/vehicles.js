import { types } from '../types/types';

import Swal from 'sweetalert2';

import { fetchWithToken } from '../helpers/fetch';


export const startSaveVehicle = (vehicle)=>{

    return ( dispatch )=>{

        dispatch(saveVehilce(vehicle)); 

    }

}

const saveVehilce = (vehicle)=>({

    type: types.createVehicleUser,
    payload: vehicle

})