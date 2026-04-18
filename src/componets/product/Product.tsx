import React from "react";
import "./product.css";
import type { ProductProps } from "../../types/product";
import { useCart } from "../../context/cart";
import Price from "../priceformat/PriceFormat";
import Button from "../atom/button/Button";

function Product({ product }: ProductProps) {
    const {addToCart} = useCart()
  const renderStar = Array.from({ length: product.rating }, (_,index) => <React.Fragment key={index}>⭐</React.Fragment>);
  return (
    <div className="product">
      <div className="product_info">
        <h3 className="title">{product.title}</h3>
        <p className="price"><Price value={product.price} /></p>
        <p className="rating">{renderStar}</p>
      </div>

      <div className="product_img">
        <img loading="lazy" src={product.product_img} alt={product.title} />
      </div>

      <Button
      disabled={product.outOfStock}
      onClick={() => addToCart(product)}
      text={product.outOfStock? 'Out of Stock': 'Add to Basket'}
      />
    </div>
  );
}

export default Product;
