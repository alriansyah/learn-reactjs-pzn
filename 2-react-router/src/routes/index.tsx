import { Routes, Route } from "react-router";
import Home from "../components/home";
import About from "../components/about";
import Product from "../components/product";
import Customer from "../components/customer";
import Seller from "../components/seller";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data">
        <Route path="products" element={<Product />} />
        <Route path="customers" element={<Customer />} />
        <Route path="sellers" element={<Seller />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
