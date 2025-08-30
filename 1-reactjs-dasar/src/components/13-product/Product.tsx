interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
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
