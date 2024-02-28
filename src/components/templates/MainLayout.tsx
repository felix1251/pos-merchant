import { Navbar, Sidebar } from "@/organisms";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
  return (
    <>
      <Toaster />
      <div className="w-full flex rounded-2xl">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="margin-max-screen pb-4 pt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
