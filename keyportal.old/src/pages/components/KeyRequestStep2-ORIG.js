const KeyRequestStep2 = () => {
    return (
        <div>

            <div class="row">
                <div className="col-4 col-md-4">



                    <div class="card">
                        <div class="card-header">
                            Step 1: Review
  </div>
                        <div class="card-body">
                            <h5 class="card-title">Review Keys</h5>


                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">AAAA (sub-master)</li>
                            <li class="list-group-item">AAAB (private)</li>
                        </ul>
                    </div>

                </div>
                <div className="col-4 col-md-4">

                    <div class="card">
                        <div class="card-header">
                            Step 2: Keyholder
  </div>
                        <div class="card-body">
                            <h5 class="card-title">Keyholder Details</h5>
                            <p class="card-text">

                                <div class="mb-3">
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First name" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last name" />
                                </div>



                            </p>

                        </div>
                    </div>



                </div>
                <div className="col-4 col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Step 3: Submit
  </div>
                        <div class="card-body">
                            <h5 class="card-title">Submit Request</h5>

                            <p class="card-text">
                                Additional Information (Optional)
                                         <textarea id="textarea" rows="3" class="form-control border-success" style={{ height: '100px' }}></textarea>
                                <a href="#" class="btn btn-primary">Submit</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyRequestStep2;