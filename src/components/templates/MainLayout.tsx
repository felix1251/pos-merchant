import { Navbar, Sidebar } from "@/organisms";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
  return (
    <div className="w-full flex rounded-2xl">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="margin-max-screen py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
