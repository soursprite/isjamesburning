import 'assets/css/WizardSteps.css';

const Steps = (props) => {


    function BuildStep(stepNumber, stepLabel) {

        let completedIcon = '<i class="fa-solid fa-check"></i>';
        let containerClass = 'col-2 text-center text-uppercase align-middle';
        let circleClass = 'float-start circle';

        containerClass += ' ';
        circleClass += ' ';

        if (props.step == stepNumber) {
            containerClass += 'text-primary';
            circleClass += 'active';
        } else if (props.step < stepNumber) {
            containerClass += 'text-muted';
            circleClass += 'inactive';
        } else if (props.step > stepNumber) {
            circleClass += 'complete';
        }

        return (
            <div class={containerClass}>
                <div class={circleClass}>
                    {props.step > stepNumber
                        ? <i class="fa-solid fa-check"></i>
                        : stepNumber
                    }
                </div>&nbsp;<div class="float-start p-2">{stepLabel}</div>
            </div>
        )

    }

    return (
        <div class="row justify-content-center shadow p-3" style={{
            backgroundColor: '#efefef', color: '#000', width: '100%', height: '80px'
        }}>

            {BuildStep(1, 'Request Access')}
            {BuildStep(2, 'Keyholder')}
            {BuildStep(3, 'Review & Submit')}


        </div >
    )
}
export default Steps;