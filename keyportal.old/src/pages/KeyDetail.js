//import { KeyID } from '../components/KeyID'

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'components/Buttons';
import Card from 'components/Cards';

import Id from 'components/KeyDetails/KeyId';
import Info from 'components/KeyDetails/KeyInfo';
import Rooms from 'components/KeyDetails/KeyRooms';
import People from 'components/KeyDetails/KeyPeople';
import Notes from 'components/KeyDetails/KeyNotes';
import Transactions from 'components/KeyDetails/KeyTransactions';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

const KeyDetails = () => {
    const [show, setShowNew] = useState(false);
    const [recordCount, setRecordCount] = useState(1);
    const { id } = useParams();

    function ToastTest() {

        var toastLiveExample = document.getElementById('liveToast')

        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    }

    return (
        <div>
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="..." />
                    <strong class="me-auto">Bootstrap</strong>
                    <small class="text-muted">11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h3 id="offcanvasRightLabel">Key Shop Order</h3>

                    <h2 id="line-height">Key Shop Order<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#line-height" style={{ paddingLeft: '0.375em' }}></a></h2>


                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div class="float-start p-2">
                                <Button label="Submit Request" />
                            </div>
                            <div class="float-start p-2">
                                <Button label="Cancel Request" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container px-4">
                <div class="row g-5">
                    <div class="col-4 p-2">
                        <Id />
                    </div>

                    <div class="col-2 p-2">

                        <Card label="Total Keys" color="white" bg="primary" p="10" />
                    </div>
                    <div class="col-2 p-2">
                        <Card label="Available" color="white" bg="success" p="3" />
                    </div>
                    <div class="col-2 p-2">

                        <Card label="Ordered" color="white" bg="secondary" p="1" />
                    </div>
                    <div class="col-2 p-2">
                        <Card label="Lost or Stolen" color="white" bg="danger" p="5" />

                    </div>
                </div>


                <div class="row g-5">
                    <div class="col-6 p-2">
                        <Info />
                    </div>
                    <div class="col-6 p-2">
                        <Rooms />
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-12 p-2">
                        <People />
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-12 p-2">
                        <Notes />
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-12 p-2">
                        <Transactions />
                    </div>
                </div>
                <div class="clearfix">&nbsp;</div>
                <div class="clearfix">&nbsp;</div>
            </div>
        </div >
    )
}
export default KeyDetails;