import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';


export const startSaveInsurance = (insurance)=>{

    return ( dispatch )=>{
         console.log(insurance)
        dispatch(saveVehicle(insurance))

    }

}

const saveVehicle = (insurance)=>({

    type: types.createInsurancePolice,
    payload: insurance

})
