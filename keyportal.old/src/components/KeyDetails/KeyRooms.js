import React, { useState } from 'react';
import Button from 'components/Buttons'


export default function KeyRooms() {

    const [showNew, setShowNew] = useState(false);
    const [recordCount, setRecordCount] = useState(0);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div class="card">
            <div class="card-header">
                <div class="float-end"><Button label='New' onClick={() => setShowNew(showNew => !showNew)} /></div>
                <div class="float-start">Rooms Accessed by AAAA1</div>
                <div class="float-start">
                    {showSearch === true && (
                        <input class="form-control" placeholder="Search Users" />
                    )}

                </div>
            </div>
            <table className="table table-sm">
                {recordCount >= 1 && (
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>netID</th>
                            <th>UIN</th>
                            <th>Date/Time Issued</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {showNew === true && (
                        <tr style={{ backgroundColor: '#ffffe0' }}>
                            <td colSpan="12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="floatingSelect">Search Key</label>
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Choose...</option>
                                                <option>AAAA</option>
                                                <option>SDK1</option>
                                                <option>AAAA</option>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <br />
                                            <div className="p-1 float-start">
                                                <Button label='Save' category='Save' onClick={() => setShowNew(show => !show)} />
                                            </div>
                                            <div className="p-1 float-start">
                                                <Button label='Cancel' category='Cancel' onClick={() => setShowNew(show => !show)} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    )}
                    {(showNew === false && recordCount === 0) && (
                        <tr>
                            <td colSpan={7} class="text-center">No Records Found!<br />Click the <Button label='New' onClick={() => setShowNew(showNew => !showNew)} /> button to set a key.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}