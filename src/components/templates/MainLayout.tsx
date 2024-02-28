import { FallbackLoading } from "@/atoms";
import { Navbar, Sidebar } from "@/organisms";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout: React.FunctionComponent = () => {
  return (
    <>
      <Toaster />
      <div className="flex w-full flex-col-reverse rounded-2xl md:flex-row">
        <Sidebar />
        <div className="mb-20 flex w-full flex-col md:mb-0">
          <Navbar />
          <main className="margin-max-screen pb-4 pt-6">
            <Suspense fallback={<FallbackLoading />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
