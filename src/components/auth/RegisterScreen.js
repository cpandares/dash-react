import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './Register.css';
import HeaderScreen from '../../shared/HeaderScreen';


export const RegisterScreen = ()=>{

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        name:"",
        lastname:"",
        email:"",
        password:"",
        phone:"",
        idUserLevel:"5",
        softdelete:"1",
        membershipRenewal:"",
        membership:"0",
        membershipPaid:"NO",      
        validationResult:"0",
        membershipType:"1",
        rv_owner:"NO",
        reference:"1",
        Allow_Communications:"YES",
        Origin:"1",       
        legal:"0"
    });

    const { name, lastname, email,password,phone,idUserLevel,softdelete,membershipRenewal, membership, membershipPaid,validationResult, membershipType,rv_owner,reference, Allow_Communications, Origin, legal } = formValues;

    const handleSubmit = ( e )=>{
        e.preventDefault();

        dispatch( startRegister( name, lastname, email,password,phone,idUserLevel,softdelete,membershipRenewal, membership, membershipPaid,validationResult, membershipType,rv_owner,reference, Allow_Communications, Origin, legal ) );
    }

    return ( 

       
        <div className="">
            <HeaderScreen />
            <div className="formContainer p-3">

              <span className="text-center">  We honor our military! CREATE YOUR MILITARY ACCOUNT</span>  <Link to="/auth/login">HERE</Link>
                <hr />

                <h4 id="msignUp" >Sign-Up<br /><span className="msgSpan" > RV Advisor & RV Advisor Motorclub.</span></h4>


                <h5 className=" title is-7" >Do you have an account aleady? <Link to="/auth/login">HERE</Link></h5>

                <hr />

                <form className="form-group" onSubmit={ handleSubmit }>  

                        <input type="hidden" name="idUserLevel"  value="5" id="idUserLevel" />


                        <div className="row rowFlex">
                            <div className="col-sm-6">
                                <label for="name">YOUR NAME: </label>
                                <input type="text" className="form-control" id="name" value= {name} name="name" onChange = { handleInputChange } pattern="^[A-Za-z -]+$" placeholder="Enter Your Name" title="Your Name should be alphabetic" required />
                            </div>
                            
                            <div className="col-sm-6">
                                <label for="lastname">YOUR LASTNAME: </label>
                                <input type="text" className="form-control" id="lastname" value= {lastname} name="lastname" onChange = { handleInputChange } pattern="^[A-Za-z -]+$" placeholder="Enter Your LastName" title="Your Name should be alphabetic" required />
                            </div>
                        </div>


                        <div className="row rowFlex mt-3">
                            <div className="col-sm-6">
                                <label for="name">EMAIL: </label>
                                <input type="email" className="form-control" id="email" value= {email} name="email" onChange = { handleInputChange } placeholder="Enter your email address" pattern="[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$" title="Your Email (Required)" required />
                            </div>

                            <div className="col-sm-6 form-group">
                                <label for="lastname">PASSWORD: </label>

                            
                                <link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" value= {password} id="password" onChange = { handleInputChange } name="password" placeholder="Enter your password" title="Your Password (Required)" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                            
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary"  id="clickme"  type="button" id="button-addon2" ><i className="fas fa-eye"></i></button>
                                    </div>
                                </div>

                            </div>

                    
				
				        </div>


                        <div className="row rowFlex">
                            <div className="col-sm-12">
                                <label for="name">PHONE NUMBER: </label>
                                <input type="text" className="form-control" name="phone" value= {phone} onChange = { handleInputChange } id="phoneNumber" placeholder="Enter your phone number" required />
                            </div>
                        </div>			

                        <div className="row rowFlex mt-5 ">
                            <h2 className="text-center">Membership Details</h2>
                            <div className="col-sm-12">
                                <label >What membership benefits package do you want to purchase ?</label>
                                <div className="control">
                                    <select className="form-control" required="" value= {membershipType} name="membershipType" id="rv_owner" onChange = { handleInputChange }  required>

                                        <option value="">Choose an option . . .</option>
                                        <option value="4">Non Member Account ($0.00)</option>
                                        <option value="1">1 Year ($29.00) </option>
                                        <option value="2">3 Years ($69.00) </option>
                                        <option value="3">5 Years ($99.00) </option>
                                        <option value="5">Professionals ($169.00) </option>
                                    </select>
                                </div>
                            </div>
                        </div>



                        <div className="row rowFlex">
                            <div className="col-sm-6">
                                <label>Are you a RV, Camper or Trailer Owner?:</label>
                                <div className="control">
                                    <select className="form-control" name="rv_owner" id="rv_owner" value= { rv_owner } onChange = { handleInputChange }>
                                        <option value="">Choose an option . . .</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
					        </div>

                            <div className="col-sm-6">
                                <label for="reference">How do you hear about us:</label>
                                <div className="control">
                                    <select className="form-control" name="reference" id="reference" value= {reference} onChange = { handleInputChange }>
                                        <option value="">Choose an option . . .</option>
                                        <option value="TV">TV</option>
                                        <option value="Radio">Radio</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Google">Google</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Direct Mailer">Direct Mailer</option>
                                        <option value="Magazine">Magazine</option>
                                        <option value="Email">Email</option>
                                        <option value="Newsletter">Newsletter</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

				        </div>


                       

                        <input type="hidden" name="Allow_Communications" value="Yes" />

                        <div className="field termsCond text-center mt-5">
                            <input type="checkbox" name="terms"  id="terms" onChange = { handleInputChange } required /><label> &nbsp;&nbsp; I accept terms and conditions (<a target="_BLANK" href="#"> Read Here</a>)</label> <br />

                            <button className="btn btn-info btn-lg mt-3" id="buttonSignup">SIGN UP</button><br />
                        </div>
                       



                </form>

            </div> 
                
        </div>  


    )


}