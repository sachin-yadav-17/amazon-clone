import React from "react";
import Price from "../priceformat/PriceFormat";
import "./basket.css";

type BasketProps = {
  product: any;
  index: any;
  removeFromCart: (id: number) => void;
};
function Basket(props: BasketProps) {
  const { product, removeFromCart, index } = props;
  const renderStar = Array.from({ length: product.rating }, (_, index) => (
    <React.Fragment key={index}>⭐</React.Fragment>
  ));
  return (
    <div className="basket">
      <div className="basket_left">
        <img loading="lazy" src={product?.product_img} alt="img" />
      </div>
      <div className="basket_right">
        <h3>{product?.title}</h3>
        <span>
          <Price value={product.price} />
        </span>
        <span>{renderStar}</span>

        <button onClick={() => removeFromCart(index)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default Basket;
