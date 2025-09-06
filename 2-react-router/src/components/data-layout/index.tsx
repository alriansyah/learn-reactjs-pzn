import { NavLink, Outlet, useLocation } from "react-router";

function DataLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-4">
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
        <p>
          Location : {location.pathname}
          {location.search}
          {location.hash}
        </p>
      </div>
    </div>
  );
}

export default DataLayout;
