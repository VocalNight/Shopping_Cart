import CheckoutCard from "./Cards/CheckoutCard";
import "../style/store.css";
import TotalCard from "./Cards/TotalCard";

export default function ShoppingCart({ cartConfig }) {
  let itemsList = cartConfig.cartItems;
  let listLength = cartConfig.cartItems.length;

  let total = cartConfig.cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="mainCheckout">
      <div className="checkoutCards">
        {itemsList.map((item) => (
          <CheckoutCard cartConfig={cartConfig} item={item} key={item.name} />
        ))}
      </div>
      {listLength !== 0 ? (
        <div>
          <TotalCard total={total} />
        </div>
      ) : (
        <div className="cartEmpty">Your Cart is Empty!</div>
      )}
    </div>
  );
}
