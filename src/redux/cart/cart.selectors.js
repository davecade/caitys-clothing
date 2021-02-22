import { createSelector } from 'reselect';

// -- Input selector
const selectCart = state => state.cart

// -- Since we used createSelector to create this "selectCartItems" variable
// -- this is now a memoize selector
export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    selectCart, cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => (
            accumulatedQuantity + cartItem.quantity
        ), 0)
)

