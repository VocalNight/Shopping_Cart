import { Link } from "react-router-dom";
import "../style/header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function Header({ cartConfig }) {
  let numberOfItems = 0;
  cartConfig.cartItems.map((item) => {
    numberOfItems += item.quantity;

    return item;
  });

  return (
    <div className="header">
      <nav className="navigation">
        <div className="title">
          <h1>The secret Shop</h1>
        </div>
        <ul className="navigationList">
          <li>
            <h2>
              <Link to="/">Home</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/store">Store</Link>
            </h2>
          </li>
          <li>
            <h1>
              <Badge color="secondary" badgeContent={numberOfItems}>
                <Link to="/checkout">
                  <ShoppingCartIcon />
                </Link>{" "}
              </Badge>
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  );
}
