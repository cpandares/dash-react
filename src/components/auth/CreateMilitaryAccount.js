import React from 'react';
import { Link } from 'react-router-dom';
import HeaderScreen from './HeaderScreenPublic';

const CreateMilitaryAccount = () => {
    return (
        <div>
            <HeaderScreen />

            <h4 className="text-center my-5">As military, you get exclusive offers in our system and enjoy a full privilege package on our platform.</h4>

            <div className="row">

                <div className="col-md-6">
                    <img src="../assets/rvplans.jpg" className="img-fluid"/>
                </div>

                <div className="col-md-6">
                    <h4>Unlimited Access to the RV Advisor website..</h4>
                    <ul>
                        <li>Preferred pricing on all services in our store.</li>
                        <li>Preferred pricing on all services in our store.</li>
                        <li>Preferred pricing on all services in our store.</li>
                    </ul>
                    <Link className="btn btn-primary rounded-pill mr-auto">Continue</Link>
                </div>

            </div>

        </div>
    );
};

export default CreateMilitaryAccount;