import React, { useState } from 'react';
import Incrementer from 'components/Count'

const initialKeyState = {
    code: '',
    buildingId: '',
    buildingName: '',
    count: 0,
};



const KeyOrderForm = () => {

    //const keys = [{ id: 1, name: 'AAAA' }, { id: 2, name: 'BBBB' }, { id: 3, name: 'CCCC' }];
    const buildings = [{ buildingId: 336, buildingName: 'Madigan Laboratory, Edward R' }, { buildingId: 192, buildingName: 'Plant Sciences Lab' }, { buildingId: 1907, buildingName: 'Turner Hall' }];

    const [keys, setKeys] = useState([]);
    const [count, setCount] = useState(0);
    const [key, setKey] = useState(initialKeyState);
    const [action, setAction] = useState(false);



    function handleChange(e) {

        setKey({ ...key, [e.target.id]: e.target.value });

        // if (key.keyCode != '') {

        //   setAction(false);

        //}

    }
    //let count = 0;

    const handleAddKey = () => {

        if (key.code != '' && key.buildingId != '') {


            setKeys((prevKeys) => [...prevKeys,
            {

                code: key.code,
                buildingId: key.buildingId,
                buildingName: key.buildingName,
                count: key.count,
            },
            ]);

            setKey({ ...initialKeyState });

        }
        console.log(...keys);
        //setAmount(0);
    }

    function decrementCount() {
        if (count != 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    function handleDeleteKey({ id }) {
        // let newKeysList = prevKeys.filter((key) => key.id !== id);
        //keys.splice(keys.indexOf(e) - 1, 1);
        //console.log(key);
        //console.log(e);
        //setKeys(prevKeys => { prevKeys.filter((key) => key.id !== id) })
    }

    React.useEffect(() => {





    }, []);





    return (
        <div>
            <div class="container">

                <div class="row">
                    <div class="col-md-4">
                        <label for="" className="form-label">First Name</label>
                        <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="" className="form-label">Last Name</label>
                        <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="" className="form-label">UIN</label>
                        <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="" className="form-label">Department Name</label>
                        <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                    <div class="col-md-6">
                        <label for="" className="form-label">Department Number</label>
                        <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                </div>

                <div class="clearfix">&nbsp;</div>


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Key Code</th>
                            <th scope="col">Number of Key</th>
                            <th scope="col">Building</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#</th>
                            <td>
                                <input type="text" className={`form-control ${key.code === '' ? "is-invalid" : "is-valid"}`} id="code" placeholder="" value={key.code} onChange={handleChange} required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please enter a valid key code.
                                </div>
                            </td>
                            <td class="text-center">
                                <Incrementer onChnage={handleChange} />
                            </td>
                            <td>
                                <select id="buildingId" className={`form-control ${key.buildingId === '' ? "is-invalid" : "is-valid"}`} aria-label="Default select" onChange={handleChange} required>
                                    <option value="" selected="selected">-- Select a Building --</option>
                                    {
                                        buildings.map((building) => (<option value={building.buildingId}>{building.buildingName}</option>))
                                    }
                                </select>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please select a valid Building.
                                </div>
                            </td>
                            <td><button type="button" class="btn btn-primary" onClick={handleAddKey}><i class="fa-solid fa-plus"></i>&nbsp;Add</button>
                            </td>
                        </tr>
                        {
                            keys.map((key, index) => (
                                <tr key={key.id}>
                                    <td>{index + 1}</td>
                                    <td>{key.code}</td>
                                    <td>{key.buildingName}</td>
                                    <td><Incrementer onChnage={handleChange} count={key.count} /></td>
                                    <td>

                                        <button type="button" class="btn btn-primary m-1" onClick={handleDeleteKey(key)}><i class="fa-solid fa-xmark"></i>&nbsp;Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div class="fixed-bottom d-grid gap-2 mx-auto" style={{ height: '60px' }} >
                    <button className={`border-top text-center bg-gradient text-white fs-4 ${keys.length != 0 ? "bg-success" : ""}`} disabled={keys.length === 0 ? "disabled" : ""} style={{ height: '60px' }}>Submit Request</button>
                </div>


            </div>
        </div >
    );
}
export default KeyOrderForm;