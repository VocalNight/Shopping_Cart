import "../../style/store.css";

export default function Card({ cartConfig, item }) {
  function updateCartItems(item) {
    let isItemInArray = findItemInArray();

    if (isItemInArray) {
      cartConfig.updateCart(updateItemInArray());
    } else {
      cartConfig.updateCart(cartConfig.cartItems.concat(item));
    }
  }

  function findItemInArray() {
    return cartConfig.cartItems.find(
      (ArrayItem) => ArrayItem.name === item.name
    );
  }

  function updateItemInArray() {
    return cartConfig.cartItems.map((arrayItem) => {
      if (item.name === arrayItem.name) {
        let newItem = {
          ...arrayItem,
          quantity: arrayItem.quantity + 1,
        };

        return newItem;
      }

      return arrayItem;
    });
  }

  return (
    <div className="itemCard">
      <div className="itemTitle">
        <img className="image" src={item.image} alt="" />
        <h3>{item.name}</h3>
      </div>
      <div className="itemDesc">
        <p>{item.description}</p>
        <p>Price: {item.price} Gold</p>
      </div>
      <div>
        <button className="addCartButton" onClick={() => updateCartItems(item)}>Add to cart</button>
      </div>
    </div>
  );
}
