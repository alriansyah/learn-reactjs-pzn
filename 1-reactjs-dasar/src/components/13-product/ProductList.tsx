import { useState, useEffect } from "react";
import Product from "./Product";

export interface ProductType {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  function handleClick(): void {
    console.info(`Handle Click`);
    setLoad(true);
  }

  // ✅ useEffect kosong → hanya jalan sekali saat mount
  useEffect(() => {
    console.info(`Call Use Effect with []`);
  }, []); // useEffect dijalankan sekali saat component pertama kali di render, karena dependency array nya kosong / empty array

  // ✅ useEffect dengan dependency, dijalankan setiap proses render atau setiap kali ada perubahan nilai pada dependency state/props yang digunakan
  useEffect(() => {
    console.info("Call Use Effect");

    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data: ProductType[] = await response.json();
      setProducts(data);
    }

    if (load) {
      fetchProducts();
    }

    // cleanup / unmount function
    // fungsi ini akan dipanggil:
    // - dijalankan saat component di unmount
    // - atau sebelum useEffect dijalankan lagi (jika ada dependency)
    return () => {
      console.info("Product List component unmounted");
    };
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;
