import React, { useState, Fragment } from 'react';
import Button from 'components/Buttons'
//import ActionStatus from './../../../components/AllocatedActionStatus'

const test = [{
    id: 1,
    keyCode: "AAAA",
    room: "AE114",
    buildingId: "0197",
    buildingName: "Turner Hall",
    isBackOrdered: true,
    isFilled: false,
    isPickedUp: false,
    isReturned: false
},
{
    id: 2,
    keyCode: "AAAB",
    room: "AE116",
    buildingId: "0197",
    buildingName: "Turner Hall",
    isBackOrdered: false,
    isFilled: true,
    isPickedUp: false,
    isReturned: false
},
{
    id: 3,
    room: "AE118",
    buildingId: "0197",
    buildingName: "Turner Hall",
    keyCode: "AAAC",
    isBackOrdered: false,
    isFilled: true,
    isPickedUp: false,
    isReturned: false
},
{
    id: 4,
    keyCode: "AAAD",
    isBackOrdered: false,
    isFilled: true,
    isPickedUp: true,
    isReturned: false
}]


export default function KeyNotes() {

    const [show, setShowNew] = useState(false);
    const [recordCount, setRecordCount] = useState(0);
    const [columns, setColumns] = useState(4);

    const [records, setRecords] = useState(test);

    function handleDeleteKey() {


    }


    function handleButton(status, value) {
        let action = '';
        if (status === 'fill') {
            if (value === true) {
                return (<span style={{ color: '#198754' }}>Filled</span>);
            } else {
                return (<button class="btn btn-success btn-sm">Fill Request</button>);
            }

        } else if (status === 'pickup') {
            if (value === true) {
                return (<span class="success">Picked Up</span>);
            } else {
                return (<button class="btn btn-success btn-sm">Pick Up Key</button>);
            }
        }

    }

    return (


        <div class="card">
            <div class="card-header">
                <div class="float-start">Allocated Access</div>
                <div class="float-end"><Button label='New' onClick={() => setShowNew(show => !show)} /></div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th rowspan="2">n</th>
                        <th rowspan="2">Key</th>
                        <th rowspan="2">Back Ordered</th>
                        <th class="text-center" colspan="3">Status</th>
                        <th rowspan="2">Actions</th>
                    </tr>
                    <tr>
                        <th>Filled</th>
                        <th>Picked Up</th>
                    </tr>

                    {
                        records.map((record, index) => {

                            let progress = Number(record.isFilled) + Number(record.isPickedUp);
                            //  let incomplete = incomplete + 1
                            return (
                                <Fragment>
                                    <tr key={record.id}>
                                        <td rowspan="2">{index + 1}</td>
                                        <td rowspan="2">{record.keyCode}</td>
                                        <td rowspan="2"><div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        </div></td>
                                        <td colspan="3" style={{ borderBottomWidth: '0px', verticalAlign: 'top' }}>
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: `${progress / 2 * 100}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{(progress / 2 * 100)}%</div>
                                            </div>
                                        </td>
                                        <td rowspan="2"><button type="button" class="btn btn-outline-danger m-1" onClick={handleDeleteKey(record)}><i class="fa-solid fa-xmark"></i>&nbsp;Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td>{handleButton("fill", record.isFilled)}</td>
                                        <td>{handleButton("pickup", record.isPickedUp)}</td>
                                        <td>{record.isReturned}</td>
                                    </tr>
                                </Fragment>
                            )
                        })
                    }
                </thead>
            </table>
        </div >
    )
}