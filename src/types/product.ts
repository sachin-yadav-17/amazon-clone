export type Product = {
  id: string;
  title: string;
  price: number;
  outOfStock: boolean;
  rating: number;
  product_img: string;
};

export type ProductProps = {
  product: Product;
};
