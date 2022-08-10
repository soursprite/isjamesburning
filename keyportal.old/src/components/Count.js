import React, { useState } from 'react';


export default function Count(props) {

    const [count, setCount] = useState(0);

    function decrementCount() {
        if (count != 0) {
            setCount(prevCount => prevCount - 1);
        }
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <button class="btn" onClick={decrementCount}><i class="fa-solid fa-minus fa-xl"></i></button>
            <input id="count" value={count} onChange={props.handleChange} style={{ width: '50px', border: '1px solid #ced4da', padding: '.375rem .75rem' }} />
            <button class="btn" onClick={incrementCount}><i class="fa-solid fa-plus fa-xl"></i></button>
        </div>
    )
}