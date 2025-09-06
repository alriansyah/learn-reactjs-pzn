import { Fragment } from "react";
import { NavLink, Outlet } from "react-router";

function DataLayout() {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold">This is header</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="w-fit border-b border-b-slate-400">
            <NavLink to="/data/products">Products</NavLink>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <NavLink
              to="/data/sellers"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Sellers
            </NavLink>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <NavLink
              to="/data/customers"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Customers
            </NavLink>
          </li>
          <li className="w-fit border-b border-b-slate-400">
            <NavLink
              to={{
                pathname: "/data/products",
                search: "?category=shoes",
                hash: "#top",
              }}
            >
              Products
            </NavLink>
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
