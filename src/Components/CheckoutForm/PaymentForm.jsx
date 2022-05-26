import React from 'react';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const PaymentForm = ({ checkoutToken, backStep }) => {
  const stripePromise = loadStripe(
    'pk_test_51L3ijrHLSeONkLNPkbHpYouOVzIxVMSKUA01Zr9x0Jx7dDBhwlgq4scGuFMngVPdYuFDFeYPhO0BUoN33yk6xxja00SDIufbBU'
  );

  const handleSubmit = (e, elements, stripe) => {
    e.event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        list_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippindData.firstName,
          lastname: shippindData.lastName,
          email: shippindData.email,
        },
        shipping: {
          name: 'Primary',
          street: shippindData.address1,
          town_city: shippindData.city,
          county_state: shippingData.shippingSubDivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
      };
    }
  };

  return (
    <div>
      <Review checkoutToken={checkoutToken} />

      <h2>Payment method</h2>

      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div>
                <button onClick={backStep}>Back</button>
                <button type="submit" disabled={!stripe}>
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
