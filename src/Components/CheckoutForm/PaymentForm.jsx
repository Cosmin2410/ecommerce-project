import React from 'react';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const PaymentForm = ({
  checkoutToken,
  backStep,
  shippingData,
  onCaptureCheckout,
  nextStep,
}) => {
  const stripePromise = loadStripe(
    'pk_test_51L3ijrHLSeONkLNPkbHpYouOVzIxVMSKUA01Zr9x0Jx7dDBhwlgq4scGuFMngVPdYuFDFeYPhO0BUoN33yk6xxja00SDIufbBU'
  );

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      // All user data

      const orderData = {
        list_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: 'Primary',
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubDivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },

        fulfillment: { shipping_method: shippingData.shippingOption },

        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      console.log(orderData);
      nextStep();
    }
  };

  return (
    <div className="payment">
      <Review checkoutToken={checkoutToken} />

      <h2>Payment method</h2>

      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement className="card" />
              <div className="btns-back-pay">
                <button className="btn-back-pay" onClick={backStep}>
                  Back
                </button>
                <button className="btn-pay" type="submit" disabled={!stripe}>
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
