import 'assets/css/WizardButtons.css';

const WizardButtons = (props) => {
    return (


        <div class="row">
            <div className="col-4 col-md-4 text-end">
                {props.next}
                <button type="button" class="btn btn-outline-primary btn btn-outline-primary" disabled={props.previous} >Previous Step</button>
            </div>
            <div className="col-4 col-md-4 text-center">
                <button type="button" class="circle circle-active" disabled={props.submit}>Submit</button>
            </div>
            <div className="col-4 col-md-4 text-start">
                <button type="button" class="btn btn-outline-primary btn btn-outline-primary" disabled={props.next} onClick={{ alert }}>Next Step</button>
            </div>
        </div>)
}

export default WizardButtons;