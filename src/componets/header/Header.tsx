import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../context/cart";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./header.css";
function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <img src="amazon_logo.png" alt="logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" name="search" placeholder="Search Amazon.in" />
        <IoMdSearch className="search-icon" />
      </div>
      <div className="header-right">
        {user ? (
          <div className="sign-wrapper">
            <span className="getting">Hello,{user.displayName}</span>
            <button className="sign_out" onClick={logout}>Sign Out</button>
          </div>
        ) : (
          <Link to="login" className="sign-wrapper">
            <span className="getting">Hello, Guest</span>
            <span className="sign-in">Sign In</span>
          </Link>
        )}
        <div className="return-order">
          <span className="return">Returns</span>
          <span className="order">& Orders</span>
        </div>
        <div className="your-prime">
          <span className="your">Your</span>
          <span className="prime">Prime</span>
        </div>
        <div className="cart">
          <Link to="/checkout">
            <IoCartOutline size={24} />
          </Link>
          <span className="count">{cart.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
