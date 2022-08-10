import React from 'react';


export default function KeyTransactions() {

    let recordCount = 0;
    const columns = 4;

    return (
        <div class="card">
            <div class="card-header">
                <div class="float-start">Transactions</div>
            </div>
            <table className="table table-sm">
                {recordCount >= 1 && (
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Note</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {recordCount === 0 && (
                        <tr>
                            <td colSpan={columns} class="text-center">No Records Found!</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}