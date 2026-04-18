import Banner from "../../componets/banner/Banner";
import Product from "../../componets/product/Product";
import { products } from "../../data/product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="product_row">
        {products.slice(0, 2).map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>

      <div className="product_row">
        {products.slice(2, 5).map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
      <div className="product_row">
        {products.slice(5, 6).map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
