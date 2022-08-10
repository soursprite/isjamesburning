import React, { useState } from 'react';
import Button from 'components/Buttons'


export default function KeyNotes() {

    const [show, setShowNew] = useState(false);
    const [recordCount, setRecordCount] = useState(0);
    const [columns, setColumns] = useState(4);

    return (
        <div class="card">
            <div class="card-header">
                <div class="float-start">Notes</div>
                <div class="float-end"><Button label='New' onClick={() => setShowNew(show => !show)} /></div>
            </div>
            <table className="table table-sm">
                {recordCount >= 1 && (
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Note</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {show === true && (
                        <tr style={{ backgroundColor: '#ffffe0' }}>
                            <td colSpan={columns}>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="comments">Comments</label>
                                            <textarea class="form-control" placeholder="Leave a comment here" id="comments"></textarea>
                                        </div>
                                    </div>
                                    <div class="clearfix">&nbsp;</div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="floatingSelect">Share Note with</label>
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Choose...</option>
                                                <option value="1">None</option>
                                                <option value="2">College</option>
                                                <option value="3">Dept/Unit</option>
                                                <option value="4">Author</option>
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
                    {(show === false && recordCount === 0) && (
                        <tr>
                            <td colSpan={columns} class="text-center">No Records Found! Click the <Button label='New' onClick={() => setShowNew(show => !show)} /> button to issue a Create a Note.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >

    );
}