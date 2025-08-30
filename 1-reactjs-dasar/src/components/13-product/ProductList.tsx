import { useState, useEffect, useRef } from "react";
import Product from "./Product";

export interface ProductType {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const loaded = useRef<boolean>(false);

  // useEffect dijalankan setelah proses render selesai dan setiap kali ada perubahan nilai pada dependency yang digunakan
  useEffect(() => {
    console.info("Call Use Effect");
    if (loaded.current === false) {
      fetch("/products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .then(() => {
          loaded.current = true;
        });
    }

    // cleanup / unmount function
    // fungsi ini akan dipanggil:
    // - dijalankan saat component di unmount
    // - atau sebelum useEffect dijalankan lagi (jika ada dependency)
    return () => {
      console.info("Product List component unmounted");
    };
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;
