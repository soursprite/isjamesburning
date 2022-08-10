
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

const KeyRequests = () => {

    const baseURL = '/data/requests.json';
    const [requests, setRequests] = useState([]);




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
                setRequests(() => res.data);
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
            <div class="container-fuild p-1">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-sm table-bordered" style={{ backgroundColor: '#fff' }}>
                            <thead>
                                <tr>
                                    <th scope="col" width="2%">n</th>
                                    <th scope="col" width="15%">Transaction</th>
                                    <th scope="col" width="15%">Requester</th>
                                    <th scope="col" width="60%" class="text-center">Request</th>
                                    <th scope="col" width="60%" class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    requests.map((request, index) => (
                                        <tr key={request.id}>
                                            <td>{index + 1}</td>
                                            <td>{request.year}<strong>{request.transaction}</strong></td>
                                            <td>{request.firstName} <strong>{request.lastName}</strong>
                                                <br />{request.netID}
                                            </td>
                                            <td>
                                                <table class="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th width="10%" class="text-muted">Key</th>
                                                            <th width="10%" class="text-muted">Room</th>
                                                            <th width="20%" class="text-muted">Building</th>
                                                            <th width="10%" class="text-muted text-center">Status</th>
                                                            <th width="20%" class="text-muted text-center">Approval By</th>
                                                            <th width="20%" class="text-muted text-center">Date</th>
                                                            <th width="10%" class="text-muted text-center">Time</th>
                                                        </tr>
                                                        {request.access && request.access.map((data) => (
                                                            <tr>
                                                                <td>{data.keyCode}</td>
                                                                <td>{data.room}</td>
                                                                <td>{data.buildingName}</td>
                                                                <td>{data.isApproved}</td>
                                                                <td>{data.apporvaldByName}</td>
                                                                <td>{moment(data.dateTimeApproved).format("MM/DD/YYYY")}</td>
                                                                <td>{moment(data.dateTimeApproved).format("h:mm a")}</td>
                                                            </tr>
                                                        )) || (
                                                                <tr>
                                                                    <td colspan="7" class="text-center">No Records Found!</td>
                                                                </tr>
                                                            )}
                                                    </thead>
                                                </table>


                                            </td>
                                            <td><Link to={'' + request.id} class="btn btn-outline-secondary">View</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default KeyRequests;