import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import HeaderScreen from "./HeaderScreen";
import SidebarScreen from "./Sidebar";
import DateTimePicker from 'react-datetime-picker';

const CreateEventScreen = () => {
  const [value, onChange] = useState(new Date());
  const [formValues, handleInputChange] = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="wrapper">
      <SidebarScreen />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderScreen />

          <div className="container">
            <form className="form-group card p-5" onSubmit={handleSubmit}>
              <h2 className="text-center">Event Data</h2>

              <div className="row">
                <div className="col-md-4">
                  <div class="form-group" data-select2-id="11">
                    <label >Group Name *</label>
                    <select
                      class="select2-single form-control select2-hidden-accessible"
                      name="state"
                      id="select2Single"
                      data-select2-id="select2Single"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="2">
                        Select
                      </option>
                      <option value="Aceh" data-select2-id="15">
                        Aceh
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div class="form-group" data-select2-id="11">
                    <label >Event Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. Excursion"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div class="form-group" data-select2-id="11">
                    <label >Location*</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Eg. Miami"
                        />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div class="form-group" data-select2-id="11">
                    <label >Price *</label>
                    <input 
                          type="number"
                          className="form-control"
                          placeholder="$3,000" />
                  </div>
                </div>

                <div className="col-md-4">
                    <label>Start Date and Time: *</label>
                    <div className="form-group date">                       
                        <DateTimePicker
                            className="form-control "
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                   
                </div>

                <div className="col-md-4">
                     <label>End Date and Time: *</label>
                    <div className="form-group date">                       
                        <DateTimePicker
                            className="form-control "
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>
              </div>

              <div className="row">
               

                <div className="col-md-6">
                    <label >Start Date and Time: *</label>
                    <div className="form-group date">                       
                        <input 
                            type="file"
                            className="form-control"
                        />
                    </div>
                   
                </div>

                <div className="col-md-6">
                     <label >Category: *</label>
                    <div className="form-group date">                       
                        <input
                            className="form-control "
                            onChange={onChange}
                          
                        />
                    </div>
                </div>                

              </div>  

              <div className="row">
                    
                    <div className="col-md-12">                       
                        <label>Description *</label>
                        <textarea 
                            
                            className="form-control"
                            >
                        </textarea>                    
                    </div>

                </div>

                <button type="submit"
                       className="btn btn-outline-primary btn-block mt-5 rounded-pill"
                >Save</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventScreen;
