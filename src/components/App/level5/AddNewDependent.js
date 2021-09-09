import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveDependent } from '../../../actions/dependents';
import { useForm } from '../../../hooks/useForm';
import HeaderScreen from './HeaderScreen';
import SidebarScreen from './Sidebar';

const AddNewDependent = () => {

    const { user } = useSelector(state=>state.auth);
    const [ relation, setRelation ] = useState(false)
    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        name:'',
        lastname:'',
        relation:'',
        age:'',
        relationSp:'',
        idUser: user.sub
      
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch( startSaveDependent(formValues) );
    }

    const handleSelect = (e)=>{
        const rela = e.target.value
        if(rela==='Other'){
            setRelation(true);
        }else{
            setRelation(false)
        }
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
                                <h3 className="text-center ">Add New Dependent</h3> <hr />

                                <div className="interest-block  container">
                                        <form method="POST"  onSubmit={ handleSubmit } >
                                            <input name="idUser" type="hidden"  />
                                            <div className="row ">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" 
                                                               name="name" 
                                                               onChange = { handleInputChange }
                                                               className="form-control"
                                                               placeholder="Vehicle Type"
                                                               required /><br/>
                                                       
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label>Lastname</label>

                                                        <input type="text" 
                                                               name="lastname" 
                                                               onChange = { handleInputChange }
                                                               className="form-control cambio" 
                                                               placeholder="Make"
                                                                required /><br/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label >Relationship</label>

                                                        <select className="form-control" id="exampleFormControlSelect1" name="relation" onChange={ handleSelect }>
                                                            <option value="">Select...</option>
                                                            <option value="Father">Father</option>
                                                            <option value="Mother">Mother</option>
                                                            <option value="Husband">Husband</option>
                                                            <option value="Wife">Wife</option>
                                                            <option value="Son">Son</option>
                                                            <option value="Daugther">Daugther</option>
                                                            <option value="Grandfather">Grandfather</option>
                                                            <option value="Grandmother">Grandmother</option>
                                                            <option value="Grandparent">Grandparent</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div  className={`col-md-4 ${ !relation && 'd-none' }`} >
                                                    <div className="form-group">
                                                        <label >Relation</label>
                                                        <input type="text" 
                                                               name="relationSp" 
                                                               onChange = { handleInputChange }
                                                               className="form-control" 
                                                               placeholder="Eg. step mother"
                                                                required /><br/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">                                                            
                                                        <label>Age</label>                                                            
                                                        <input 
                                                            className="form-control" 
                                                            name ="age"  
                                                            onChange = { handleInputChange }
                                                            type="number"
                                                            min="1" 
                                                            max="100" 
                                                            step="1" />
                                                        
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

export default AddNewDependent;