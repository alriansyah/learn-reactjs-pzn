import type { ProductType } from "./ProductList";
interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>
        {product.id} : {product.name}
      </h2>
      <p>Harga : {product.price}</p>
    </div>
  );
}

export default Product;
