export default function CheckoutCard({ cartConfig, item }) {
  function increaseQuantity() {
    updateItem("+");
  }

  function decreaseQuantity() {
    updateItem("-");
  }

  
  function updateItem(operation) {
      let itemsInCart = [];
      
      let quantity = operation === "+" ? item.quantity + 1 : item.quantity - 1;
      
    if (quantity === 0) {
      itemsInCart = removeItemFromCart();
    } else {
        itemsInCart = updateItems(quantity);
    }
    
    cartConfig.updateCart(itemsInCart);
}

function removeItemFromCart() {
  return cartConfig.cartItems.filter(
    (cartItem) => item.name !== cartItem.name
  );
}

  function updateItems(quantity) {
    return cartConfig.cartItems.map((cartItem) => {
      if (cartItem.name === item.name) {
        return {
          ...cartItem,
          quantity: quantity,
        };
      }
      return cartItem;
    });
  }

  return (
    <div className="checkoutCard">
      <div className="itemTitle">
        <img className="image" src={item.image} alt="" />
        <h3>{item.name}</h3>
      </div>
      <div>
        <p>Quantity: {item.quantity}</p>
        <p>Item total: {item.price * item.quantity}</p>
      </div>
      <div>
        <button className="quantityBtn" onClick={() => increaseQuantity()}>
          +
        </button>
        <button className="quantityBtn" onClick={() => decreaseQuantity()}>
          -
        </button>
      </div>
    </div>
  );
}
