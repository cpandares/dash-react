import { types } from '../types/types';

import Swal from 'sweetalert2';

import { fetchWithToken } from '../helpers/fetch';

export const updateUser = ( user )=>{ 

    return async ( dispatch )=>{

        Swal.showLoading();

        const resp = await fetchWithToken(`update-user/${user.id}`, user, 'PUT');
        const body = await resp.json();

        if(body.ok){
           Swal.fire('success', body.msg,'success')
        }else{
            Swal.fire('Error',body.msg,'error')
        }
    }



}