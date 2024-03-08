import { decreaseIceCreamQty } from "./iceCreamAction"

export const addToCart=(product) =>
{debugger
    // decreaseIceCreamQty(product)
    return {
        type:"ADD_TO_CART",
        product
    }
}
export const deleteFromCart=(id) =>
{
    return {
        type:"DELETE_FROM_CART",
        id
    }
}