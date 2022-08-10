import React, { useState } from 'react';

export default function KeyNotes() {

    //IsActive Status
    const [isActive, setActiveStatus] = useState(true);
    const [isRetired, setRetiredStatus] = useState(false);




    return (
        <div className={"shadow-sm h-100 p-5 bg-light border rounded-3 shadow-sm border-3 " + (isActive ? 'border-success' : '')} >
            <div class="float-end">
                <div class="btn-group dropend">
                    <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Add to Order Form</button></li>

                        {(isActive === true && isRetired === false) && (
                            <li><button class="dropdown-item" type="button" onClick={() => setActiveStatus(isActive => !isActive)}>Set as Inactive</button></li>
                        )}

                        {(isActive === false && isRetired === false) && (
                            <li><button class="dropdown-item" type="button" onClick={() => setActiveStatus(isActive => !isActive)}>Set as Active</button></li>
                        )}

                        {isRetired === true ? (
                            <li><button class="dropdown-item" type="button" onClick={() => setRetiredStatus(isRetired => !isRetired)}>Remove AAAA1 key from Retired status</button></li>
                        ) : (
                                <li><button class="dropdown-item" type="button" onClick={() => setRetiredStatus(isRetired => !isRetired)}>Retire AAAA1 key</button></li>

                            )

                        }
                    </ul>
                </div>
            </div>
            <h2>AAAA1</h2>
        </div >
    );
}