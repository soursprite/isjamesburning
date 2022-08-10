

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const Profile = () => {

    const imageStyle = {
        borderRadius: '50%',
        border: '6px solid #fff',
        backgroundColor: '#fff',
        width: '100px',
        position: 'relative',
        top: '-75px'
    };


    return (
        <div>
            <div className="container">
                <div class="clearfix">&nbsp;</div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div style={{ backgroundColor: '#000', height: '100px' }}>&nbsp;</div>
                            <div class="card-body">
                                <img src="../../logo192.png" alt="..." class="img-fluid" style={imageStyle}></img>
                                <h1>Name</h1>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div >
    )
}
export default Profile;