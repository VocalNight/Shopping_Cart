import CheckoutCard from "./Cards/CheckoutCard";

export default function ShoppingCart({ cartConfig }) {

    let itemsList = cartConfig.cartItems;

    let total = cartConfig.cartItems.reduce(
        (acc, item) => acc + (item.quantity * item.price), 0
    );
    
  return (
    <div>
      <div>
        <h1>Items in your cart</h1>
      </div>

      <div>
        {itemsList.map((item) => (
            <CheckoutCard cartConfig={cartConfig} item={item} key={item.name}/>
        ))}
      </div>
      <div>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}
