import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AdressForm /> : <PaymentForm />);

  return (
    <div>
      <main>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel> {step} </StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* If on last step */}
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </main>
    </div>
  );
};

export default Checkout;
