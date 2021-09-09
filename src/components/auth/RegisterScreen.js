import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './Register.css';
import HeaderScreen from "./HeaderScreenPublic";
import { useState } from 'react';


export const RegisterScreen = ()=>{

    const [ typeMembership1, setTypeMembership1 ] = useState(false); //Membershiptype 1 year
    const [ typeMembership2, setTypeMembership2 ] = useState(false); //Membershiptype 3 year
    const [ typeMembership3, setTypeMembership3 ] = useState(false); //Membershiptype 5 year
    const [ typeMembership4, setTypeMembership4 ] = useState(false); //Membershiptype non member account
    const [ typeMembership5, setTypeMembership5 ] = useState(false); //Membershiptype professionals

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
        membershipType:"",
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

    const handleSelect = (e)=>{
        e.preventDefault();
        const typeMembership = e.target.value;
       
        if(typeMembership==1){//Set membershiptype 1 year
            setTypeMembership1(true);
        }else{
            setTypeMembership1(false);
        }

        if(typeMembership==2){
            setTypeMembership2(true)
        }else{
            setTypeMembership2(false)
        }
        if(typeMembership==3){
            setTypeMembership3(true);
        }else{
            setTypeMembership3(false)
        }
        if(typeMembership==4){
            setTypeMembership4(true)
        }else{
            setTypeMembership4(false)
        }if(typeMembership==5){
            setTypeMembership5(true);
        }else{
            setTypeMembership5(false);
        }
        
    }

    return ( 

       
        <div className="">
            <HeaderScreen />
            <div className="formContainer p-3">

              <span className="text-center">  We honor our military! CREATE YOUR MILITARY ACCOUNT</span>  <Link to="/auth/create-military-account">HERE</Link>
                <hr />

                <h4 id="msignUp" >Sign-Up<br /><span className="msgSpan" > RV Advisor & RV Advisor Motorclub.</span></h4>


                <h5 className=" title is-7" >Do you have an account aleady? <Link to="/auth/login">HERE</Link></h5>

                <hr />

                <form className="form-group" onSubmit={ handleSubmit }>  

                        <input type="hidden" name="idUserLevel"  value="5" id="idUserLevel" />


                        <div className="row rowFlex">
                            <div className="col-sm-6">
                                <label>YOUR NAME: </label>
                                <input type="text" className="form-control" id="name" value= {name} name="name" onChange = { handleInputChange } pattern="^[A-Za-z -]+$" placeholder="Enter Your Name" title="Your Name should be alphabetic" required />
                            </div>
                            
                            <div className="col-sm-6">
                                <label>YOUR LASTNAME: </label>
                                <input type="text" className="form-control" id="lastname" value= {lastname} name="lastname" onChange = { handleInputChange } pattern="^[A-Za-z -]+$" placeholder="Enter Your LastName" title="Your Name should be alphabetic" required />
                            </div>
                        </div>


                        <div className="row rowFlex mt-3">
                            <div className="col-sm-6">
                                <label >EMAIL: </label>
                                <input type="email" className="form-control" id="email" value= {email} name="email" onChange = { handleInputChange } placeholder="Enter your email address" pattern="[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$" title="Your Email (Required)" required />
                            </div>

                            <div className="col-sm-6 form-group">
                                <label >PASSWORD: </label>

                            
                              {/*   <link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet"/> */}

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
                                <label>PHONE NUMBER: </label>
                                <input type="text" className="form-control" name="phone" value= {phone} onChange = { handleInputChange } id="phoneNumber" placeholder="Enter your phone number" required />
                            </div>
                        </div>			

                        <div className="row rowFlex mt-5 ">
                            <h2 className="text-center">Membership Details</h2>
                            <div className="col-sm-12">
                                <label >What membership benefits package do you want to purchase ?</label>
                                <div className="control">
                                    <select className="form-control" required=""  name="membershipType" id="rv_owner" onChange={ handleSelect }  required>

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

                        <div className={`row rowFlex ${ !typeMembership1 && 'd-none' }`}>

                            <div className="col-sm-12">
                                <h6 className="mt-3">With your Basic Account you will be receiving:</h6>
                               <ul>
                                   <li>1 Year of Access to the RV Advisor Motorclub.</li>
                                   <li>Preferal price in all the services of our store.</li>
                                   <li>Exclusive access to our partners discounts.</li>
                               </ul>
                            </div>

                        </div>

                       <div className={`row rowFlex ${ !typeMembership2 && 'd-none' }`}>

                            <div className="col-sm-12">
                                <h6 className="mt-3">With your Gold Account you will be receiving:</h6>
                               <ul>
                                   <li>3 years of Access to the RV Advisor Motorclub.</li>
                                   <li>Preferal price in all the services of our store.</li>
                                   <li>Exclusive access to our partners discounts.</li>
                                   <li>Legal club included for one year.</li>
                                   <li>Exclusive access to our Travel Reward club and Coupons on the go (save around).</li>
                               </ul>
                            </div>

                        </div>

                        <div className={`row rowFlex ${ !typeMembership3 && 'd-none' }`}>

                            <div className="col-sm-12">
                                <h6 className="mt-3">With your Platinum Account you will be receiving:</h6>
                               <ul>
                                   <li>5 years of Access to the RV Advisor Motorclub.</li>
                                   <li>Preferal price in all the services of our store.</li>
                                   <li>Exclusive access to our partners discounts.</li>
                                   <li>Legal club included for one year.</li>
                                   <li>Exclusive access to our Travel Reward club and Coupons on the go (save around).</li>
                               </ul>
                            </div>

                        </div>

                        <div className={`row rowFlex ${ !typeMembership5 && 'd-none' }`}>

                            <div className="col-sm-12">
                                <h6 className="mt-3">Access to The RV Advisor Professional dashboard</h6>
                               <ul>
                                   <li>Create a professional landing page.</li>
                                   <li>Sell products on your store.</li>
                                   <li>Create events and contests.</li>
                                   <li>Network with other professionals.</li>
                                  
                               </ul>
                            </div>

                        </div>

                        <div className={`row rowFlex ${ !typeMembership4 && 'd-none' }`}>

                            <div className="col-sm-12">
                                <h6 className="mt-3">Free access to The RV Advisor dashboard</h6>
                               <ul>
                                   <li>You will not have access to the benefits of The RV Advisor Motorclub.</li>
                                   <li>You will not have access to Coupons.</li>
                                   <li>You will not have member pricing on our services.</li>
                                   
                               </ul>
                            </div>

                        </div>

                        <div className="row rowFlex mt-5 ">
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
                                <label>How do you hear about us:</label>
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
                            <input type="checkbox" name="terms"  id="terms" onChange = { handleInputChange } required /><label> &nbsp;&nbsp; I accept terms and conditions {/* (<a target="_BLANK" href="#"> Read Here</a>) */}</label> <br />

                            <button className="btn btn-info btn-lg mt-3" id="buttonSignup">SIGN UP</button><br />
                        </div>
                       



                </form>

            </div> 
                
        </div>  


    )


}