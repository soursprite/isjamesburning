import React, { Component } from 'react';
import axios from 'axios';


export default class SelectRooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }



    getOptions() {

        let url = './../../data/' + this.props.building + '.json';


        axios
            .get(url,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
            .then((res) => {
                //setBuildings(() => res.data);
                //const rooms = res.data;
                this.setState({ rooms: res.data })
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

    componentDidMount() {

        this.getOptions()

    }



    render() {
        return (
            <div>
                <label>Rooms</label>
                <select name="room" id="room" className={`form-control ${this.props.building === '' ? "is-invalid" : "is-valid"}`} onChange={(e) => this.props.setRoom(e.target.value)}>
                    <option value=""> -- Select a Room -- </option>
                    {(this.props.building != '') &&
                        this.state.rooms.map((room) =>
                            <option key={room.roomId} value={room.roomId}>{room.roomId} ({room.floorId} floor)</option>
                        )
                    }
                </select>
                <div class="invalid-feedback">Please select a building. </div>
            </div>
        )
    }
}
