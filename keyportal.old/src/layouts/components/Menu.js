
const Menu = () => {
    return (
        <div class="menu" role="navigation" style={{ padding: '10px', backgroundColor: '#e6e6e6', display: 'flex' }}>
            <div className="float-start p-1">
                <a href="/keys" type="button" class="btn btn-secondary">Keys</a>
            </div>
            <div className="float-start p-1">
                <a href="/rooms" type="button" class="btn btn-secondary">Rooms</a>
            </div>
            <div className="float-start p-1">
                <a href="/keys/requests" type="button" class="btn btn-outline-secondary">Requests</a>
            </div>
            <div className="float-start p-1">
                <a href="/keys/order" type="button" class="btn btn-outline-secondary position-relative">Order Form
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        2
                    <span class="visually-hidden">unread messages</span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Menu;