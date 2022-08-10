const RequestKeysStep1 = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
                <div className="container pt-5">
                    <div class="row">
                        <div className="col-12 col-md-12 border border-1">
                            SELECT KEYS TO MY ROOMS
                            <div class="card">
                                <div class="card-body m-1">
                                    AAAA (sub-master)
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body m-1">
                                    AAAB (private)

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-12 col-md-12 border border-1">
                            SELECT KEYS
                            <div class="form-group col-md-7"><label for="building">Building</label> <select class="form-control"><option selected="selected" value=""></option> <option value="0073">Agricultural Bioprocess Lab</option><option value="0008">Agricultural Engineering Sciences Building</option><option value="0842">Agronomy Seed House</option><option value="0983">Animal Science Machine Storage Building</option><option value="0165">Animal Sciences Laboratory</option><option value="0018">Architecture Annex</option><option value="0158">Bevier Hall</option><option value="0169">Burnsides Research Laboratory</option><option value="0107">Environmental Research Annex</option><option value="0935">Food Science Dry Processing Lab</option><option value="1258">Fruit Research Farm- Admin. Building</option><option value="1233">Integrated Bioprocessing Research Laboratory</option><option value="0336">Madigan Laboratory, Edward R</option><option value="0171">Meat Science Laboratory</option><option value="0069">Mumford Hall</option><option value="0124">National Soybean Research Center</option><option value="0558">Newton House</option><option value="0256">Plant Sciences Laboratory</option><option value="0990">Soybean Damage Lab- An Eng Farm</option><option value="0040">Stock Pavilion</option><option value="1032">Swine Res Ctr- Isolation Building</option><option value="0197">Turner Hall</option><option value="0853">USDA Growth Chamber Building</option><option value="0183">Wood Engineering Laboratory</option></select></div>
                            <div class="form-group col-md-3"><label for="room">Room</label> <select name="roomSelect" class="form-control"><option selected="selected" value=""></option> </select></div>
                            <div class="form-group col-md-2"><label>&nbsp;</label> <br /> <button type="button" disabled="disabled" class="btn btn btn-outline-success">Add</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestKeysStep1;