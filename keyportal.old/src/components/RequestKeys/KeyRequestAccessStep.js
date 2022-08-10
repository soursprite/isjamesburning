//import WizardButtons from './../WizardButtons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectBuildings from 'components/SelectBuildings';
import SelectRoooms from 'components/SelectRooms';

//import './../../../Popup.css';


const glass = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    width: "30rem",
    height: "20rem",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, .15)",
    backdropFilter: "blur(5px)"
}

const getLocalItems = () => {

    let requests = localStorage.getItem('requests')

    if (requests) {
        return JSON.parse(localStorage.getItem('requests'))
    } else {
        return []
    }
}

const KeyRequestAccessStep = () => {

    const [items, setItems] = useState(getLocalItems());
    const buildingAbbrevations = [
        {
            '0197': 'TH'
        },
        {
            '0124': 'NSRC'
        }]

    function removeKey() {


    }


    function addKey(k) {

        if (items.some(item => item.key === k)) {
            setItems(items.filter(item => item.key !== k));
        } else {
            setItems([...items, { 'key': k, 'building': '', 'room': '' }])
        }
        console.log(items.some(item => 'AAAA'))

    }

    function addItem(e) {

        setItems([...items, { 'key': e, 'building': building, 'room': room }])

    }


    const [keys, setKeys] = useState([]);

    const [building, setBuilding] = React.useState('');
    const [room, setRoom] = React.useState('');
    const [key, setKey] = React.useState('');


    const [type, setType] = React.useState('my');


    //const [expanded, setExpanded] = React.useState(false);
    //const handleExpandClick = () => {
    //    setExpanded(!expanded);
    //};

    React.useEffect(() => {

        localStorage.setItem('requests', JSON.stringify(items))

    }, [items]);

    return (
        <div>



            <div className="container-fluid">


                <div class="row">

                    <div class="col-6 py-4">
                        <div class="row justify-content-evenly">
                            <div class="col-7">
                                <div class="cleafix">&nbsp;</div>
                                <h3 class="fw-light">Request Access and/or Keys</h3>

                                <div className={`card mb-3 shadow ${type === 'my' ? "border-primary" : ""}`}>
                                    <div class="card-body">
                                        <div class="float-end"><a href="#" class="link-secondary stretched-link" onClick={() => setType('my')}><i class="fa-solid fa-chevron-right"></i></a></div>
                                        <h5 class="card-title">Rooms Owned by Me</h5>
                                        <p class="card-text fw-light">Select from a list of keys you are the room owner</p>
                                    </div>
                                </div>
                                <div className={`card mb-3 shadow ${type === 'all' ? "border-primary" : ""}`}>
                                    <div class="card-body">
                                        <div class="float-end"><a href="#" class="link-secondary stretched-link" onClick={() => setType('all')}><i class="fa-solid fa-chevron-right"></i></a></div>
                                        <h5 class="card-title">Any Available Key</h5>
                                        <p class="card-text fw-light">Select Keys from a list of all buildings and rooms across campus</p>
                                    </div>
                                </div>
                                <div className={`card mb-3 shadow ${type === 'label' ? "border-primary" : ""}`}>
                                    <div class="card-body">
                                        <div class="float-end"><a href="#" class="link-secondary stretched-link" onClick={() => setType('label')}><i class="fa-solid fa-chevron-right"></i></a></div>
                                        <h5 class="card-title">Special Keys</h5>
                                        <p class="card-text fw-light">Select Keys from a list labeled keys</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 py-4" style={{ borderLeft: 'solid #efefef' }}>
                        <div class="row justify-content-evenly">
                            <div class="col-7">
                                <div class="clearfix"></div>
                                {(type === 'my' &&
                                    <div>
                                        <h3 class="fw-light">Rooms Owned by Me</h3>
                                        <p class="fw-light text-muted">Keys that access my rooms</p>

                                        <div className={`card mb-3 ${items.some(item => item.key === 'AAAA') ? "border-primary border-2 shadow" : ""}`}>
                                            <div class="card-body">
                                                <h5 class="card-title">AAAA<div class="float-end fw-light">Smith Research Lab

                                                </div>
                                                </h5>
                                                <p class="card-text"><i class="fa-solid fa-door-open"></i>&nbsp;Opens Rooms</p>
                                                <div class="float-end fw-light fs-5">
                                                    {(items.some(item => item.key === 'AAAA') &&
                                                        <a href="#" class="stretched-link" onClick={() => addKey('AAAA')}> <i class="fa-solid fa-check"></i>&nbsp;Added</a>
                                                    ) || (
                                                            <a href="#" class="link-secondary stretched-link" onClick={() => addKey('AAAA')}><i class="fa-solid fa-plus"></i>&nbsp;Add
                                                            </a>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`card mb-3 ${items.some(item => item.key === 'BBBB') ? "border-primary border-2 shadow" : ""}`}>
                                            <div class="card-body">
                                                <h5 class="card-title">BBBB<div class="float-end fw-light">Single Office Key

                                                </div>
                                                </h5>
                                                <p class="card-text"><i class="fa-solid fa-door-open"></i>&nbsp;Opens Rooms</p>
                                                <div class="float-end fw-light fs-5">
                                                    {(items.some(item => item.key === 'BBBB') &&
                                                        <a href="#" class="stretched-link" onClick={() => addKey('BBBB')}> <i class="fa-solid fa-check"></i>&nbsp;Added</a>
                                                    ) || (
                                                            <a href="#" class="link-secondary stretched-link" onClick={() => addKey('BBBB')}><i class="fa-solid fa-plus"></i>&nbsp;Add
                                                            </a>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) || (type === 'all' &&
                                    <div>
                                        <h3 class="fw-light">Any Available Key</h3>
                                        <p class="fw-light">Select Keys from All Buildings across campus.</p>

                                        <div class="row g-3">
                                            <div class="col-md-12">
                                                <SelectBuildings setBuilding={setBuilding} />
                                            </div>
                                            <div class="col-md-8">
                                                <SelectRoooms key={building} building={building} setRoom={setRoom} />
                                            </div>

                                            <div class="col-md-4">
                                                <div class="clearfix">&nbsp;</div>
                                                <button type="button" class="btn btn-outline-primary" onClick={() => addItem('')}> Select Room</button>
                                            </div>


                                            <div class="col-md-12">
                                                {items.map((item) => (
                                                    (item.room != '' && item.building != '' &&
                                                        <div class="float-start p-1">
                                                            <button type="button" class="btn btn-outline-primary" onClick="">X  {item.room} {item.building}</button>
                                                        </div>
                                                    )
                                                ))
                                                }
                                            </div>


                                        </div>
                                    </div>
                                    ) || (type === 'label' &&
                                        <div>
                                            <h3 class="fw-light">Special Keys</h3>
                                            <p class="fw-light">Select Keys from Special keys. For example, key to the front entrances of buildings or sub-master that open several research groups lab doors.</p>

                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <label>Department</label>
                                                    <select class="form-control">
                                                        <option></option>
                                                        <option>Crop Sciences</option>
                                                        <option>Natural Resources & Environmental Sciences</option>
                                                        <option></option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Building</label>
                                                    <select class="form-control">
                                                        <option></option>
                                                        <option>Turner Hall </option>
                                                        <option>Plant Sciences Lab</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-8">
                                                    <label>Key</label>
                                                    <select class="form-control">
                                                        <option></option>
                                                        <option>Classrooms Key (AAAA)</option>
                                                        <option>Entrance Key (SDK1)</option>
                                                        <option>Professor X Research Lab (AAAA)</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="clearfix">&nbsp;</div>
                                                    <button type="button" class="btn btn-outline-primary">Select Key</button>
                                                </div>

                                                <div class="col-md-12">
                                                    {items.map((item) => (
                                                        (item.key != '' &&
                                                            <div class="float-start p-1">
                                                                <button type="button" class="btn btn-outline-primary" onClick="">X  {item.key}</button>
                                                            </div>
                                                        )
                                                    )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row justify-content-evenly">

                    <i class="fa-solid fa-key-skeleton"></i>

                </div>

            </div>
        </div >
    )
}

export default KeyRequestAccessStep;