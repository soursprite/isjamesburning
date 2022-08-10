

const Button = (props) => {

    let icon = '';
    let buttonClass = 'btn btn-sm';
    buttonClass += ' ';

    if (props.label == 'Edit') {
        icon = 'fa-solid fa-pencil';
    } else if (props.label == 'New') {
        icon = 'fa-solid fa-plus';
    } else if (props.label == 'Save') {
        icon = 'fa-solid fa-plus';
    } else if (props.label == 'Cancel') {
        icon = 'fa-solid fa-xmark';
    }

    if (props.category == 'Save') {
        buttonClass += 'btn-success';
    } else if (props.label == 'Cancel') {
        buttonClass += 'btn-danger';
    } else {
        buttonClass += 'btn-outline-secondary';
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
export default Button;
