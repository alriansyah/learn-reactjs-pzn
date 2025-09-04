import { useParams } from "react-router";

type ProductDetailParams = {
  id: string;
};

function ProductDetail() {
  const { id } = useParams<ProductDetailParams>();

  return (
    <div>
      <h1 className="text-3xl font-bold">Product Detail {id}</h1>
      <p>Welcome to the ProductDetail page</p>
    </div>
  );
}

export default ProductDetail;
