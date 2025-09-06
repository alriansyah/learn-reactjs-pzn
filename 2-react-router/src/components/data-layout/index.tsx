import { Fragment } from "react";
import { Link, Outlet } from "react-router";

function DataLayout() {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold">This is header</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="w-fit border-b border-b-slate-400">
            <Link to="/data/products">Products</Link>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <Link to="/data/sellers">Sellers</Link>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <Link to="/data/customers">Customers</Link>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <Link
              to={{
                pathname: "/data/products",
                search: "?category=shoes",
                hash: "#top",
              }}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <p className="text-2xl font-bold">This is footer</p>
      </div>
    </Fragment>
  );
}

export default DataLayout;
