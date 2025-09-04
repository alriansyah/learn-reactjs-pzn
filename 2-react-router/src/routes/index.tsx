import { Routes, Route } from "react-router";
import DataLayout from "../components/data-layout";
import Home from "../components/home";
import About from "../components/about";
import Data from "../components/data";
import Product from "../components/product";
import Customer from "../components/customer";
import Seller from "../components/seller";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<DataLayout />}>
        <Route index element={<Data />} />
        <Route path="products" element={<Product />} />
        <Route path="customers" element={<Customer />} />
        <Route path="sellers" element={<Seller />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
