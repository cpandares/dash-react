import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import HeaderScreen from "./HeaderScreen";
import SidebarScreen from "./Sidebar";
import { updateUser } from '../../../actions/user';


const BasicData = () => {


  
const dispath = useDispatch();
const {  user  } = useSelector( state=>state.auth );

const [ formValues, handleInputChange ] = useForm({
  name:user.name,
  lastname:user.lastname,
  email:user.email,
  id : user.sub        
});

const handleSubmit = (e)=>{
  e.preventDefault()

 dispath(updateUser(formValues))

}

const { sub, name, lastname, email } = formValues;

  return (
    <div id="wrapper">
      <SidebarScreen />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderScreen />

          <div className="container">          
            
            <form className="form-group card p-5" onSubmit={ handleSubmit }>

              <h2 className="text-center">Your Data</h2>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="name"
                    value={ name }
                    name="name"
                    onChange = { handleInputChange }
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

                <input type="hidden" 
                      className="form-control"
                  
                      name="id"
                      value={ sub }
                    
                      />

                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="email"
                    value={ email }
                    name="email"
                    onChange = { handleInputChange }
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="lastname"
                    value={ lastname }
                    name="lastname"
                    onChange = { handleInputChange }
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="password"
                    
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="Confirm Password"
                   
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="SSN"
                    
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

              </div>

              <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                  <input
                    className="form-control my-2"
                    placeholder="birth day"
                    
                    style={{ border: "none", borderBottom: "1px solid black" }}
                  />
                </div>

               
              </div>

             

              <button
                className="btn btn-outline-primary mt-5 rounded-pill"
                type="submit"
                style={{ width: "50%", marginLeft: "250px" }}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicData;
