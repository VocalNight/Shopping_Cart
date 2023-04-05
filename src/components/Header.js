import { Link } from "react-router-dom";
import "../style/header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function Header({ cartConfig }) {

    let numberOfItems = 0;
    cartConfig.cartItems.map((item) => {
        numberOfItems += item.quantity;

        return item;
    })
  
  return (
    <div className="header">
      <nav>
        <h1>
          <Link to="/store">Store</Link>
        </h1>
        <h1>
          <Badge color="secondary" badgeContent={numberOfItems}>
            <Link to="/checkout">
              <ShoppingCartIcon />
            </Link>{" "}
          </Badge>
          <Link to="/">Home</Link>
        </h1>
      </nav>
    </div>
  );
}
