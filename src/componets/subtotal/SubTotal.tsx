import { useMemo } from "react";
import { useCart } from "../../context/cart";
import Price from "../priceformat/PriceFormat";
import "./subtotal.css";
import Button from "../atom/button/Button";
function SubTotal() {
  const { cart } = useCart();
  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );
  const disable = true;

  return (
    <div className="subtotal">
      <div className="subtotal_label">
        <span className="subtotal_qauntity">
          Subtotal<span className="qauntity">({cart.length} item):</span>
        </span>
        <strong className="subtotal_amount">
          <Price value={totalPrice} />
        </strong>
      </div>
      <div className="gift_checkbox">
        <input type="checkbox" />
        <span>This Order contains a gift</span>
      </div>
      <Button text="Proceed to checkout" disabled={disable} />
    </div>
  );
}

export default SubTotal;
