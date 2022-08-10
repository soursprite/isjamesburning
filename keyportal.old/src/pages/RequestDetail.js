
import Allocated from 'components/RequestDetail/AllocatedAccess';

const RequestDetail = () => {


    return (
        <div class="container px-4">


            <div class="row g-5">
                <div class="col-6 p-2">
                    <div class="card">
                        <div class="card-header">Keyholder</div>
                        <div class="card-body">
                        </div>
                    </div>
                </div>
                <div class="col-6 p-2">
                    <div class="card">
                        <div class="card-header">Request</div>
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-12 p-2">
                    <div class="card">
                        <div class="card-header">Requested Access</div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th rowspan="2">Key</th>
                                    <th rowspan="2">Room</th>
                                    <th rowspan="2">Building</th>
                                    <th class="text-center" colspan="2">Approval</th>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                                <tr>
                                    <td colspan="5">No Records Found!</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-12 p-2">
                    <Allocated />
                </div>
            </div>
            <div class="row g-5"></div>



        </div >
    )
}
export default RequestDetail;