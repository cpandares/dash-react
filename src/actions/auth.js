import { types } from '../types/types';

import Swal from 'sweetalert2';

import { fetchNoToken,fetchWithToken } from '../helpers/fetch';


export const startLoginWithEmail = ( email, password )=>{

      return async( dispatch )=>{      

        Swal.showLoading()
        
        const resp = await fetchNoToken('login', { email, password }, 'POST');

        const body = await resp.json();
     

        if(body.ok){
            Swal.hideLoading()
            localStorage.setItem('token', body.token);
            localStorage.setItem('tokenInitDate', new Date().getTime());

           
            dispatch( login( {
                user:body.user
            } ) )

            
        }else{
            Swal.fire('Error', body.msg, 'error');
        }

    }
}



export const startRegister = ( name, lastname, email,password,phone,idUserLevel,softdelete,membershipRenewal, membership, membershipPaid,validationResult, membershipType,rv_owner,reference, Allow_Communications, Origin, legal )=>{

    return async( dispatch )=>{

        Swal.showLoading()
        const resp = await fetchNoToken('register',{ name, lastname, email,password,phone,idUserLevel,softdelete,membershipRenewal, membership, membershipPaid,validationResult, membershipType,rv_owner,reference, Allow_Communications, Origin, legal }, 'POST');

        const body = await resp.json();

       

        if(body.ok){
            Swal.hideLoading()
            localStorage.setItem('token', body.token);
            localStorage.setItem('tokenInitDate', new Date().getTime());

           
            dispatch( register( { 

                user: body.user,
                token: body.token,
               

             } ) )

             dispatch(finishChecking());
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
      
    }

}

export const register = ( user, token ) =>{

    return {

        type: types.register,
        payload: {

            user,
            token
        
        }


    }

}

export const login = ( user, token ) =>{

    return {

        type: types.login,
        payload:  user 
    
    }

}

export const startChecking = ( ) =>{

    return async( dispatch )=>{      

      
        
        const resp = await fetchWithToken('renew');

        const body = await resp.json();

       /*  console.log(body)
 */
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('tokenInitDate', new Date().getTime());
            
            
            dispatch( login( { 

                user: body.user,
                token: body.token,
                

             } ) )

           
        }else{
            
            dispatch(finishChecking());
        }

    }
   

};

export const startLogout= ()=>{

    return async ( dispatch )=>{

        localStorage.removeItem('token');
        localStorage.removeItem('tokenInitDate');


        await dispatch( logout() );

    }

}

export const logout = ()=>({

    type: types.logout
})



export const finishChecking = ( ) =>({
    type: types.finishChecking
});



export const getUserById = (id)=>{
    return {
        type: types.getUserById,
        payload: id
   }
}


export const startGetUserById = ( id )=>{
  

   return async( dispatch )=>{            
        
        const resp = await fetchWithToken(`user/${id}`, id, 'GET')
        const body = await resp.json();
      
        const uid = body.user.id
       

        if(body.ok){

             dispatch(getUserById(id,{
                id:uid
            }))
          
            dispatch(finishChecking());
        }
      

   }
    

}

export const renewToken = ()=>{
    
}
