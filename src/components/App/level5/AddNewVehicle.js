import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveVehicle } from '../../../actions/vehicles';
import { useForm } from '../../../hooks/useForm';
import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';



const AddNewVehicle = () => {

     const { user } = useSelector(state => state.auth);
     const dispatch = useDispatch();

  
    const [ formValues, handleInputChange ] = useForm({
        type:'',
        make:'',
        model:'',
        year:'',
        new_used:'',
        purchaseDate:'',
        purchasePrice:'',
        vinNumber:'',
        milleage:'' ,
        idUser: user.sub
    });

   

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch( startSaveVehicle(formValues) )
    }

    return (

        <div id="wrapper">
            <SidebarScreen />
    
            <div id="content-wrapper" className="d-flex flex-column animate animate__fadeIn">
                <div id="content">
                    <HeaderScreen />
        
                    <div className="page-wrapper container">

                        <div className="page-breadcrumb">

                            <div className="row align-items-center ">

                                <div className="col-lg-12 col-md-12  card p-5">
                                    <h3 className="text-center ">Add New Vehicle</h3> <hr />

                                    <div className="interest-block  container">
                                            <form method="POST"  onSubmit={ handleSubmit } >
                                                <input name="idUser" type="hidden" value = { user.sub } />
                                                <div className="row ">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label >Vehicle Type</label>
                                                            <input type="text" 
                                                                   name="type" 
                                                                   onChange = { handleInputChange }
                                                                   className="form-control"
                                                                   placeholder="Vehicle Type"
                                                                   required /><br/>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Make</label>

                                                            <input type="text" 
                                                                   name="make" 
                                                                   onChange = { handleInputChange }
                                                                   className="form-control cambio" 
                                                                   placeholder="Make"
                                                                    required /><br/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label >Model</label>

                                                            <input type="text"
                                                                  className="form-control cambio"
                                                                  name="model"
                                                                  onChange = { handleInputChange }
                                                                  placeholder="Model"
                                                                  required /><br/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">                                                            
                                                            <label >Vehicle Year</label>                                                            
                                                            <input 
                                                                className="form-control" 
                                                                name ="year"  
                                                                onChange = { handleInputChange }
                                                                type="number"
                                                                min="1977" 
                                                                max="2022" 
                                                                step="1" />
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label >Vehicle Status</label>
                                                            <select required="" name="new_used" className="form-control cambio"   onChange = { handleInputChange }>
                                                                <option value="">--Select vehicle status--</option>
                                                                <option value="New">New </option>
                                                                <option value="Used">Used </option>
                                                            </select>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group"> 
                                                            <label >Purchase Date</label>	
                                                            <input className="form-control"
                                                                   name ="purchaseDate"  
                                                                   onChange = { handleInputChange }
                                                                   type="number" 
                                                                   min="1977" 
                                                                   max="2022" 
                                                                   step="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label >Purchase Price</label>
                                                            <input 
                                                                type="number"
                                                                id="price"  
                                                                min="0"  
                                                                className="form-control cambio"
                                                                onChange = { handleInputChange }
                                                                name="purchasePrice" 
                                                                placeholder="Purchase Price" 
                                                                required /><br/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label >Vin Number</label>
                                                            <input type="text"
                                                              className="form-control cambio"
                                                              onChange = { handleInputChange }
                                                              name="vinNumber" 
                                                              placeholder="Vin Number" 
                                                              required /><br/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Current Mileage</label>
                                                            <input type="text"
                                                                 className="form-control cambio"
                                                                 onChange = { handleInputChange }
                                                                 name="milleage"
                                                                 placeholder="Current Mileage"
                                                                 required /><br/><br/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <div className="form-group">
                                                            <button className="button btn btn-outline-primary btn-lg" id="submitbtn" > Add Vehicle </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                </div>

                            </div>

                        </div>               
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddNewVehicle;