import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveInsurance } from "../../../actions/insurance";
import { useForm } from "../../../hooks/useForm";
import HeaderScreen from "./HeaderScreen";
import SidebarScreen from "./Sidebar";

const InsurancePoliceScreen = () => {
   
  const { user }  = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    idUser: user.sub,
    nameCompany:'',
    policeNumber:'',
    phoneClains:'',
    description:'',
    type:'',
    make:'',
    model:'',
    year:'',
    new_used:'',
    purchaseDate:'',
    purchasePrice:'',
    vinNumber:'',
    milleage:''
  });

 

  const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(startSaveInsurance(formValues))

  }

  return (
    <div id="wrapper">
      <SidebarScreen />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderScreen />

          <div className="container">
            <form className="form-group card p-5" onSubmit={handleSubmit}>
                <input type="hidden" name="idUser"/>
              <h2 className="text-center">Insurance Information</h2>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <label> Company Name </label>
                  <input
                    className="form-control my-2"
                    placeholder="Eg. Company Insurance"
                    name="nameCompany"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 col-md-12">
                  <label> Policy number </label>
                  <input
                    className="form-control my-2"
                    placeholder="Eg. 1324597"
                    name="policeNumber"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 col-md-12">
                  <label> Claims phone number </label>
                  <input
                    className="form-control my-2"
                    placeholder="Eg. +1. (124) 123549"
                    name="phoneClains"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 ">
                  <label> Insurance information </label>

                  <textarea className="form-control my-2" name="description"></textarea>
                </div>
              </div>
              

              <h2 className="text-center mt-5">Vehicle Information</h2>

                <div className="row mt-5">
                    <div className="col-lg-4 col-md-12">
                        <label>Vehicle Type</label>
                        <input type="text" 
                            name="type" 
                            onChange = { handleInputChange }
                            className="form-control"
                            placeholder="Vehicle Type"
                            required />
                    </div>

                <div className="col-lg-4 col-md-12">
                  <label>Make</label>
                    <input type="text" 
                        name="make" 
                        onChange = { handleInputChange }
                        className="form-control cambio" 
                        placeholder="Make"
                        required />
                </div>

                <div className="col-lg-4 col-md-12">
                  <label>Model</label>
                    <input type="text"
                        className="form-control cambio"
                        name="model"
                        onChange = { handleInputChange }
                        placeholder="Model"
                        required />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <label>Vehicle Year</label>         
                  <input 
                    className="form-control" 
                    name ="year"  
                    onChange = { handleInputChange }
                    type="number"
                    min="1977" 
                    max="2022" 
                    step="1" />                                                            
                </div>

                <div className="col-lg-4 col-md-12">
                  <label>Vehicle Status</label>
                    <select required="" name="new_used" className="form-control cambio"   onChange = { handleInputChange }>
                        <option value="">--Select vehicle status--</option>
                        <option value="New">New </option>
                        <option value="Used">Used </option>
                    </select>
                </div>

                <div className="col-lg-4 col-md-12">
                  <label>Purchase Date</label>	
                    <input className="form-control"
                        name ="purchaseDate"  
                        onChange = { handleInputChange }
                        type="number" 
                        min="1977" 
                        max="2022" 
                        step="1" />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <label>Purchase Price</label>
                    <input 
                        type="number"
                        id="price"  
                        min="0"  
                        className="form-control cambio"
                        onChange = { handleInputChange }
                        name="purchasePrice" 
                        placeholder="Purchase Price" 
                        required />
                </div>

                <div className="col-lg-4 col-md-12">
                  <label>Vin Number</label>
                  <input type="text"
                    className="form-control cambio"
                    onChange = { handleInputChange }
                    name="vinNumber" 
                    placeholder="Vin Number" 
                    required />
                </div>

                <div className="col-lg-4 col-md-12">
                  <label>Current Mileage</label>
                    <input type="text"
                        className="form-control cambio"
                        onChange = { handleInputChange }
                        name="milleage"
                        placeholder="Current Mileage"
                        required />
                </div>
              </div>
                
            
              <button
                className="btn btn-outline-primary mt-5 rounded-pill"
                type="submit"
                style={{ width: "50%", marginLeft: "250px" }}
              >
                Save Vehicle
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePoliceScreen;
