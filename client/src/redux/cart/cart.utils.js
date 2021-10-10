export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => (
    cartItems.filter(cartItem => {
            if(cartItem.id !== cartItemToRemove.id) {
                return cartItem
            }
        }
    )
)

export const decreaseQuantity = (cartItems, cartItemToDecrease) => {

    if(cartItemToDecrease.quantity > 1) {
        return cartItems.map(cartItem => {
            let newQuantity = cartItem.quantity
            if(cartItem.id === cartItemToDecrease.id) {
                newQuantity = cartItem.quantity - 1
            }
            return {...cartItem, quantity: newQuantity};
        })
    } else {
        return removeItemFromCart(cartItems, cartItemToDecrease)
    }
}