import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { commerce } from '../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AdressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

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
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkoutToken && <Form />
        )}
      </main>
    </div>
  );
};

export default Checkout;
