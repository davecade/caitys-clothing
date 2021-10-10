import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IciKZBsvFK7V5QEt63VqBlaUHkYNomzLhqKo7eIpzwdDhvvhad3WfpkTYMLv4GHugVzmqFRmt68e6au7trFe6JK00MK3BpK5E'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error))
            alert(
                'There was an issue with your payment. Please ensrue you use the provided credit card'
            );
        });
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name="Caity's Clothing Store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Zwf.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;


//https://svgshare.com/i/CUz.svg