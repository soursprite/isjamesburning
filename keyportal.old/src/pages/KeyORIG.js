//import { KeyID } from '../components/KeyID'

import React, { useState } from 'react';
import Button from './../components/Buttons';
import Card from './../components/Cards';

const Key = () => {
    const [show, setShowNew] = useState(false);

    handleNew() {



    }


    return (
        <div>
            <div className="container px-4">
                <div class="row g-5">
                    <div class="col-6 p-2">
                        <div class="h-100 p-5 bg-light border rounded-3 shadow-sm">


                            <div class="float-end">
                                <div class="btn-group dropend">
                                    <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" type="button">Make Active</button></li>
                                        <li><button class="dropdown-item" type="button">Archive</button></li>
                                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>AAAA1</h2>
                        </div>
                    </div>

                    <div class="col-6 p-2">
                        <div class="row">
                            <div class="col-6">
                                <Card label="Total Keys" color="white" bg="primary" p="10" />
                                <Card label="Available" color="white" bg="success" p="3" />
                            </div>
                            <div class="col-6">
                                <Card label="Ordered" color="white" bg="secondary" p="1" />
                                <Card label="Lost or Stolen" color="white" bg="danger" p="5" />
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row g-5">
                    <div class="col-6 p-2">

                        <div class="card">
                            <div class="card-header">
                                <div class="float-end"><Button label="Edit" /></div>Key Information


                            </div>
                            <table class="table table-sm table-borderless">
                                <tbody>
                                    <tr>
                                        <td scope="row" width="50%">Building Code (Engraved on Key)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Label</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Access Level</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Type of Key</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Request able Online</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Storage Location (Hook)</td>
                                        <td> ()</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-6 p-2">
                        <div class="card">
                            <div class="card-header">
                                <div class="float-end"><Button label="New" onClick={(e) => setShowNew(!show)} /></div>



                            </div>

                            <table>
                                {!show === true && (
                                    <tr>
                                        <td>
                                            <div class="float-start"><label>netID</label><input type="text" /></div>

                                        </td>
                                    </tr>)
                                }
                                <tr>
                                    <td class="text-center">No Records Found!<br />Click the new button to issue a new key.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-12 p-2">
                        <div class="card">
                            <div class="card-header">
                                <div class="float-end"><Button label='New' /></div>
                                People Issued Key AAAA1

                            </div>

                            <table>
                                <tr>
                                    <td class="text-center">No Records Found!<br />Click the new button to issue a new key.</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-12 p-2">
                        <div class="card">
                            <div class="card-header">
                                <div class="float-end"><Button label='New' /></div>
                                Notes

                            </div>

                            <table>
                                <tr>
                                    <td class="text-center">No Records Found!<br />Click the <Button label='New' /> button to Add a new Note.</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>

                <div class="clearfix">&nbsp;</div>
                <div class="clearfix">&nbsp;</div>
            </div>
        </div >
    )
}
export default Key;