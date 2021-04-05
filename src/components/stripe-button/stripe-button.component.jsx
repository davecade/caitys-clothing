import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IciKZBsvFK7V5QEt63VqBlaUHkYNomzLhqKo7eIpzwdDhvvhad3WfpkTYMLv4GHugVzmqFRmt68e6au7trFe6JK00MK3BpK5E'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name="Crown Clothing Pty Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;