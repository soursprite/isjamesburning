//import WizardButtons from './../WizardButtons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';


const KeyRequestKeyholderStep = () => {
    const baseURL = '/api/rooms.json';

    const [type, setType] = React.useState('self');

    React.useEffect(() => {
        axios
            .get(baseURL,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
            .then((res) => {
                //setRooms(() => res.data);
                //console.log(res.data);
                //setIsLoading(false);
                //filteredData(() => res.data);
                //getKeysList(() => res.data);
                //getKeysList(res.data));
            })
            .catch((error) => {
                console.log(error.res);
                //console.log('Reject');
                //console.log(Promise.reject);
            });


    }, []);

    return (
        <div>



            <div className="container-fluid">

                <div class="cleafix">&nbsp;</div>
                <div class="row justify-content-evenly">
                    <div class="col-4">
                        <h3 class="fw-light">Request Access for</h3>
                        <div className={`card mb-3 shadow ${type === 'self' ? "border-primary" : ""}`}>
                            <div class="card-body">
                                <div class="float-end"><a href="#" class="link-secondary stretched-link" onClick={() => setType('self')}><i class="fa-solid fa-chevron-right"></i></a></div>
                                <h5 class="card-title">Myself</h5>
                                <p class="card-text">These Keys will be assigned to me</p>
                            </div>
                        </div>
                        <div className={`card mb-3 shadow ${type === 'all' ? "border-primary" : ""}`}>
                            <div class="card-body">
                                <div class="float-end"><a href="#" class="link-secondary stretched-link" onClick={() => setType('all')}><i class="fa-solid fa-chevron-right"></i></a></div>
                                <h5 class="card-title">For another person</h5>
                                <p class="card-text fw-light">Select a Student, Faculty, or Staff member from across campus</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 text-center d-flex vh-100%"><div class="vr"></div></div>


                    <div class="col-4">


                        {(type === 'self' &&
                            <div>
                                <h3 class="fw-light">Keys for</h3>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="FirstName" class="form-label fw-bolder">First Name</label><br />
                                        Gregory
                                    </div>
                                    <div class="col-md-6">
                                        <label for="LastName" class="form-label fw-bolder">Last Name</label><br />
                                        Parks
                                    </div>
                                    <div class="col-md-6">
                                        <label for="EmailAddress" class="form-label  fw-bolder">Email Address</label><br />
                                        gparks@illinois.edu<br />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="PhoneNumber" class="form-label  fw-bolder">Phone Number</label><br />
                                        (217) 333-3333
                                    </div>
                                </div>
                            </div>
                        ) || (type === 'all' &&
                            <div>
                                <h3 class="fw-light">Keys for</h3>
                                <p class="fw-light">Student, Faculty, or Staff member across campus.</p>

                                <div class="row g-3">
                                    <div class="col">
                                        <label>Search Student, Faculty, or Staff </label>
                                        <input type="Search" class="form-control" id="Search" aria-describedby="Search" /><br />
                                    </div>
                                </div>
                            </div>
                            )
                        }

                    </div>
                </div>




            </div>

        </div>
    )
}

export default KeyRequestKeyholderStep;