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

          <div>BasicData</div>
          
        </div>
      </div>
    </div>
  );
};

export default BasicData;
