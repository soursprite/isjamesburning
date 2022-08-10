import React, { useState } from 'react';
import Button from 'components/Buttons'


export default function KeyNotes() {

    const [show, setShowNew] = useState(false);

    return (
        <div className="card" style={{ backgroundColor: '#' }}>
            < div class="card-header" >
                <div class="float-end">
                    {show === true ? (
                        <Button label="Save" onClick={() => setShowNew(show => !show)} />
                    ) : (
                        <Button label="Edit" onClick={() => setShowNew(show => !show)} />
                    )}

                </div>Key Information</div >
            <table class="table table-sm table-borderless">
                <tbody>
                    <tr>
                        <td scope="row" width="50%">Building Code (Engraved on Key)</td>
                        <td>
                            {show === true && (
                                <input class="form-control" />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Label</td>
                        <td>
                            {show === true && (
                                <input class="form-control" />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Access Level</td>
                        <td>
                            {show === true && (
                                <input class="form-control" />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Type of Key</td>
                        <td>
                            {show === true && (
                                <input class="form-control" />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Request able Online</td>
                        <td>
                            {show === true && (
                                <input class="form-control " />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Storage Location (Hook)</td>
                        <td>
                            {show === true && (
                                <div>
                                    <div class="float-start">
                                        <div class="form-floating" style={{ width: '250px' }}>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Choose Storage Box</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <label for="floatingTextarea2">Storage Location</label>
                                        </div>
                                        <div class="float-start" style={{ width: '250px' }}>
                                            <div class="form-floating">
                                                <input class="form-control" />
                                                <label for="floatingTextarea2">Hook Number</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}