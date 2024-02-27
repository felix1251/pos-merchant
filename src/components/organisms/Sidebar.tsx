import { CompanyLogo } from "@/atoms";
import React from "react";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="sticky top-0 h-screen min-w-72 bg-white border-r drop-shadow-md">
      <div className="p-5 flex flex-col justify-start items-start">
        <CompanyLogo />
        <div className="text-primary font-semibold -mt-2 ml-7">Merchant</div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
