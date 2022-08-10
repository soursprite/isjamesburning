

const AllocatedActionStatus = (props) => {

    if (status === 'filled') {
        if (value === true) {
            action = '<span class="success">Filled</span>';
        } else {
            action = '<button class="btn btn-success btn-sm">Filled</button'
        }

    } else if (status === 'pickedup') {
        if (value === true) {
            action = '<span class="success">Picked Up</span>';
        } else {
            action = '<button class="btn btn-success btn-sm">Picked Up</button>';
        }
    }


    return (
        <button
            type="button"
            class={buttonClass}
            onClick={props.onClick}
        >
            <i class={icon}></i>&nbsp;
            {props.label}
        </button>
    );
}
export default AllocatedActionStatus;
