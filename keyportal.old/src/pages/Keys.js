import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KeysList from './components/KeysList';
import DepartmentDropdown from './../components/FilterDropdown';
import DropdownFilter from './../components/FilterDropdown';


const baseURL = './data/keys.json';
//const baseURL = 'https://jsonplaceholder.typicode.com/posts';

function Keys() {
    const [isLoading, setIsLoading] = useState(true);
    const [keys, setKeysList] = useState([]);
    const [search, setSearch] = useState('');
    const [searchColumns] = useState(['buildingName', 'keyCode', 'label', 'accessLevel']);
    const [buildings, setBuildings] = useState([]);

    const depts = [{ id: 802, name: 'Crop Sciences' }, { id: 875, name: 'NRES' }];
    //const [searchParam] = useState(['deptCode', 'deptName', 'buildingName', 'keyCode', 'label']);
    //const [filteredKeys, setFilteredKeys] = useState();
    // setBuildings({ buildingId: 336, buildingName: 'Turner Hall' });

    function handleBuildingOptions(keys) {

    }

    function handleBuildingSelects() {


    }


    function handleBuildingFilter() {



    }


    function handleSearch(rows) {
        return rows.filter((row) =>
            searchColumns.some(
                (column) =>
                    row[column].toString().toLowerCase().indexOf(search.toLowerCase()) > -1
            )
        );
    }


    function handleFilterHardCodedColumnsSearch(rows) {
        //setSearch(() => e.target.value);
        //const columns = rows[0] && Object.keys(rows[0]);
        //console.log(columns);

        const columns = rows[0] && Object.keys(rows[0]);

        return rows.filter(
            (row) =>
                //row.buildingName.toString().toLowerCase().indexOf(search) > -1 ||
                //row.keyCode.toString().toLowerCase().indexOf(search) > -1 ||
                row.keyBuildingCode.toLowerCase().includes(search.toLowerCase()) ||
                //row.label.toString().toLowerCase().indexOf(search) > -1 ||
                row.accessLevel.toLowerCase().includes(search.toLowerCase())
        );
    }

    function handleFilterAllColumnsSearch(rows) {
        //setSearch(() => e.target.value);
        const columns = rows[0] && Object.keys(rows[0]);
        console.log(columns);
        return rows.filter((row) =>
            searchColumns.some(
                (column) =>
                    //return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
                    row[column].toString().toLowerCase().indexOf(search) > -1
            )
        );
    }



    /* function handleFilter {
     
         keys.filter((item) => {
             return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
         })
     
     
     }
     
    */
    React.useEffect(() => {
        setIsLoading(true);

        //ADD THE DEPT CODE OPTION IN THE URL WHEN SWITCHING BETWEEN DEPTS
        axios
            .get(baseURL)
            //.then((res) => {
            //    console.log(res.data.json);
            //    return res.data.json;
            //const allKeys = res.data.keys.
            //})
            .then((res) => {
                setIsLoading(false);
                //filteredData(() => res.data);
                setKeysList(() => res.data);
                //getKeysList(res.data));

                //setBuildings(() => res.data);
                buildings = [...new Set(res.data.map(building => building.buildingId))];
            })
            .catch((error) => {
                console.log(error.res);
                //console.log('Reject');
                //console.log(Promise.reject);
            });
    }, []);


    /*function search(keys) {
     
        return keys.filter((keys) => {
     
        })
     
    }*/

    if (isLoading) {
        return (
            <div>Loading!</div>
        )
    }

    return (
        <div>

            <div>
                <div className="float-start p-1">
                    <DropdownFilter label='Departments' items={depts} onChange={''} />
                </div>
                <div className="float-start p-1">
                    <DropdownFilter label='Buildings' items={depts} />
                </div>
                <div className="float-start p-1">
                    <input id="search" label="Search" type="text" class="form-control" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />


                    <div class="clearfix">&nbsp;</div>
                </div>

            </div>



            <KeysList data={handleSearch(keys)} />

        </div >
    )

}
export default Keys;