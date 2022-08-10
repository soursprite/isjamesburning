import React, { useState } from 'react';
import Button from 'components/Buttons'


export default function KeyPeople() {

    const [showNew, setShowNew] = useState(false);
    const [recordCount, setRecordCount] = useState(0);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div class="card">
            <div class="card-header">
                <div class="float-end"><Button label='New' onClick={() => setShowNew(showNew => !showNew)} /></div>
                <div class="float-start">People Issued Key AAAA1</div>

                <div class="float-start">
                    <button type="button" class="btn btn-light show" onClick={() => setShowSearch(showSearch => !showSearch)}><i class="fa-solid fa-magnifying-glass"></i></button>

                </div>

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
                            <td colSpan={7}>
                                <div className="p-3"><input type="text" class="form-control" placeholder="Search First, Last Name or NetID" /></div>
                            </td>
                        </tr>
                    )}
                    {(showNew === false && recordCount === 0) && (
                        <tr>
                            <td colSpan={7} class="text-center">No Records Found!<br />Click the <Button label='New' onClick={() => setShowNew(showNew => !showNew)} /> button to issue a key.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}