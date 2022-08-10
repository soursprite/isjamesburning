

const Card = (props) => {

    let cardclass = 'card bg-' + props.bg + ' bg-gradient text-' + props.color;

    return (

        <div class="p-1" >
            <div class={cardclass}>
                <div class="card-body">
                    <h5 class="card-title">{props.label}</h5>
                    <p class="card-text text-center fs-1">{props.p}</p>
                </div>
            </div>
        </div >
    );
}
export default Card;