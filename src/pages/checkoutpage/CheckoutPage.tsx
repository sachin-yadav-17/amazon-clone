import Basket from "../../componets/basket/Basket";
import SubTotal from "../../componets/subtotal/SubTotal";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
import "./checkoutpage.css";

function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="banner_ad.jpg" className="banner_ad" />
        <h3>Hello,{' '}{user?.displayName}</h3>
        <div className="basket_title">
        <h3>Your Shopping Basket</h3>
        <button onClick={clearCart} disabled={cart.length==0}>Clear Cart</button>
        </div>

        <div className="basket_contanier">
          {cart.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            cart.map((item, index) => (
              <Basket
                key={`${item.id}-${index}`}
                product={item}
                index={index}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
