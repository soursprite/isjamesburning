import React, { Component } from 'react';
import axios from 'axios';


export default class SelectBuildings extends React.Component {

    //constructor(props) {
    //    super(props);
    state = {
        buildings: []
    }
    //}

    componentDidMount() {
        axios
            .get('./../../data/buildings.json',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
            .then((res) => {
                //setBuildings(() => res.data);
                //const buildings = res.data;
                this.setState({ buildings: res.data })
                console.log(res.data);
                //setIsLoading(false);
                //filteredData(() => res.data);
                //getKeysList(() => res.data);
                //getKeysList(res.data));
            })
            .catch((error) => {
                console.log(error.res);
                //console.log('Reject');
                //console.log(Promise.reject);
            })

    }



    render() {
        return (
            <div>
                <label>Buildings</label>
                <select class="form-control" onChange={(e) => this.props.setBuilding(e.target.value)}>
                    <option value=""> -- Select a Building -- </option>
                    {this.state.buildings.map((building) =>
                        <option key={building.buildingId} value={building.buildingId}>({building.buildingId}) {building.buildingName}</option>
                    )}
                </select>
            </div>
        )
    }
}
