
const FilterDropdown = (props) => {

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false">
                {props.label}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu3" onChange={props.onChange}>
                {
                    props.items.map((item, index) => (
                        <li><button class="dropdown-item" type="button">({item.id}) {item.name}</button></li>
                    ))
                }
            </ul>

        </div>
    )
}
export default FilterDropdown;
