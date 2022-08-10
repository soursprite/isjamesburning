
import { Link } from 'react-router-dom';


export default function KeysList({ data }) {
    return (
        <table className="table table-sm table-bordered" style={{ backgroundColor: 'rgb(255, 255, 255' }}>
            <thead>
                <tr>
                    <th rowspan="2" scope="col" width="2%">n</th>
                    <th rowspan="2" scope="col">Unit (Dept Code)</th>
                    <th rowspan="2" scope="col">Key Code (Key Building Code)</th>
                    <th rowspan="2" scope="col">Building</th>
                    <th rowspan="2" scope="col">Label</th>
                    <th colspan="2" scope="col" class="text-center">Access Level</th>
                    <th colspan="2" scope="col" class="text-center">Inventory</th>
                    <th rowspan="2" scope="col">Action</th>
                </tr>
                <tr>
                    <th class="text-center">Level</th>
                    <th class="text-center">Type</th> <th class="text-center">Available</th>
                    <th class="text-center">Issued</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((key, index) => (
                        <tr key={key.id}>
                            <td>{index + 1}</td>
                            <td>{key.deptName} ({key.deptCode})</td>
                            <td>{key.keyCode} ({key.keyBuildingCode})</td>
                            <td>{key.buildingName} ({key.buildingId})</td>
                            <td>{key.label}</td>
                            <td>{key.accessLevel}</td>
                            <td>{key.accessType}</td>
                            <td>{key.inventory}</td>
                            <td></td>
                            <td><Link to={'' + key.id} class="btn btn-outline-secondary">View</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table >
    );
}