import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router";

function DataLayout() {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold">This is header</h1>
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
