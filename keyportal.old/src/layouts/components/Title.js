const Title = ({ ...props }) => {
    return (
        <div>
            <div class="module_header" style={{ backgroundColor: '#13294b', color: '#eee', width: '100%', padding: '10px 25px 10px 15px' }}>
                <div class="module_controls" style={{ textAlign: 'left' }}>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Title;