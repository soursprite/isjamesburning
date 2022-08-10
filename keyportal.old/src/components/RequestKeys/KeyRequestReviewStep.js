//import WizardButtons from './../WizardButtons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';


const getLocalItems = () => {

    let requests = localStorage.getItem('requests')

    if (requests) {
        return JSON.parse(localStorage.getItem('requests'))
    } else {
        return []
    }
}



const KeyRequestStep1 = () => {
    const baseURL = '/api/rooms.json';

    const [items, setItems] = useState(getLocalItems());

    React.useEffect(() => {


    }, []);

    return (
        <div>

            <div className="container-fluid">

                <div class="cleafix">&nbsp;</div>
                <div class="row justify-content-center">


                    <div class="col-4">
                        <h3 class="fw-light">Keyholder</h3>

                        <div class="card">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-md-6"><label for="FirstName" class="form-label fw-bolder">First Name</label><br />Gregory</div>
                                    <div class="col-md-6"><label for="LastName" class="form-label fw-bolder">Last Name</label><br />Parks</div>
                                    <div class="col-md-6"><label for="EmailAddress" class="form-label fw-bolder">Email Address</label><br />gparks@illinois.edu<br /></div>
                                    <div class="col-md-6"><label for="PhoneNumber" class="form-label fw-bolder">Phone Number</label><br />(217) 333-3333</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 d-flex vh-100%"><div class="vr"></div></div>
                    <div class="col-5">
                        <h3 class="fw-light">Your Key/Room Selection</h3>

                        {items.map((item, index) => (
                            <div class="row">
                                <div class="col-1 fs-1 text-muted">
                                    <i className={`fa-solid ${item.key != '' ? "fa-key" : "fa-door-closed"}`}></i>
                                </div>
                                <div class="col-10">
                                    <div class="fs-4">{item.key} {item.room} {item.building}</div>
                                    <div class="muted-text">{item.key != '' ? "Requested Key" : "Requested Room & Building"}</div>
                                </div>
                                <div class="col-1 text-text-muted">
                                    <button class="btn btn-outline-secondary"><i class="fa-solid fa-x"></i>&nbsp;Remove</button>

                                </div>
                                <div class="clearfix">&nbsp;</div>
                            </div>
                        )
                        )}

                    </div>
                </div>
            </div>

        </div>

    )
}

export default KeyRequestStep1;