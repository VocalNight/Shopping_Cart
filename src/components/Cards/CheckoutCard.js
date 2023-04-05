import { useState } from "react"

export default function CheckoutCard({cartConfig, item}) {

    function increaseQuantity() {
        updateItem('+');
    }

    function decreaseQuantity() {
        updateItem('-')
    }

    function updateItem(operation) {
        cartConfig.updateCart(
            cartConfig.cartItems
            .map((cartItem) => {
                if (cartItem.name === item.name) {

                    let quantity = 
                    operation === '+' ? 
                    cartItem.quantity + 1
                    :
                    cartItem.quantity - 1

                    if (quantity <= 1) {
                        quantity = 1;
                    }

                    return {
                        ...cartItem,
                        quantity: quantity
                    }
                }
                return cartItem
            })
        )
    }

    return (
        <div>
            <p><img src={item.image} alt="" /></p>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Item total: {item.price * item.quantity}</p>
            <button onClick={() => increaseQuantity()}>+</button>
            <button onClick={() => decreaseQuantity()}>-</button>
        </div>
    )
}
