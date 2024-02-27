import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
