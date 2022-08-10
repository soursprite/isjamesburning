import './../WizardButtons.css';

import React, { useState, useEffect } from 'react';

import AccessStep from 'components/RequestKeys/KeyRequestAccessStep';
import KeyholderStep from 'components/RequestKeys/KeyRequestKeyholderStep';
import ReviewStep from 'components/RequestKeys/KeyRequestReviewStep';
import Steps from 'components/RequestKeys/KeyRequestSteps';

//import WizardButtons from './components/WizardButtons';



const RequestKeys = () => {

    const [step, setStep] = React.useState(1);

    function handleSubmit() {



    }


    /* const pageStart = 1;
     const pageCount = 3;
     const [page, setPage] = useState(pageStart);
     const [nextButtonDisabled, setPrevButtonDisabled] = useState(false);
     const [prevButtonDisabled, setNextButtonDisabled] = useState(true);
     */


    /* function nextPage() {
         if (page < pageCount) {
             setPage(() => page + 1);
         }
 
         if(page === pageCount) {
             setNextButtonDisabled(nextButtonDisabled = !nextButtonDisabled);
         }else {
             setNextButtonDisabled(nextButtonDisabled = !nextButtonDisabled);
         }
     }
 
     function previousPage() {
         if (page > pageStart) {
             setPage(() => page - 1);
         }
 
         if (page === pageStart) {
             setPrevButtonDisabled(prevButtonDisabled = !prevButtonDisabled);
         } else {
             setPrevButtonDisabled(prevButtonDisabled = !prevButtonDisabled);
         }
 
     }
 */

    return (
        <div>

            <Steps step={step} />

            {(step === 1 &&
                <AccessStep />)
                || (step === 2 &&
                    <KeyholderStep />)
                || (step === 3 &&
                    <ReviewStep />
                )}


            <div class="row justify-content-end">
                <div className="col-2">
                    {(step >= 2) && (
                        <button type="button" class="btn btn-outline-primary btn btn-outline-primary" onClick={() => setStep(step - 1)}>Previous Step</button>
                    )}
                </div>
                <div className="col-2">
                    {(step === 99) && (
                        <button type="button" class="circle circle circle-active" >Submit</button>
                    )}
                </div>
                <div className="col-2">
                    {(step <= 2) && (
                        <button type="button" class="btn btn-outline-primary btn btn-outline-primary" onClick={() => setStep(step + 1)}>Next Step</button>
                    )}
                </div>
            </div>



            {(step === 3) && (
                <div class="fixed-bottom d-grid gap-2 mx-auto" style={{ height: '60px' }}>
                    <button class="border-top text-center bg-gradient text-white fs-4 bg-success" style={{ height: '60px' }} onClick={() => handleSubmit()}>Submit Request</button>
                </div >
            )
            }



        </div >
    )
}

export default RequestKeys;