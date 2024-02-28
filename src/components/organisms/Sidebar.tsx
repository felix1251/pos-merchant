import { CompanyLogo } from "@/atoms";
import { SidebarMenuItem } from "@/molecules";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import { IoBagCheck, IoBagHandle } from "react-icons/io5";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="fixed bottom-0 md:sticky md:top-0 md:h-screen min-w-full md:min-w-72 bg-white border-r">
      <div className="p-5 flex-col justify-start items-start hidden md:flex">
        <CompanyLogo />
        <div className="text-secondary/80 font-bold text-lg -mt-2 ml-9">
          Merchant
        </div>
      </div>
      <div className="flex md:flex-col justify-between md:justify-start px-4 py-2 lg:p-0 border-t-2 md:border-none">
        <SidebarMenuItem
          name="Items"
          icon={<IoBagHandle className="text-3xl sm:text-2xl" />}
          active
        />
        <SidebarMenuItem
          name="Orders"
          icon={<IoBagCheck className="text-3xl sm:text-2xl" />}
        />
        <SidebarMenuItem
          name="Users"
          icon={<FaUsers className="text-3xl sm:text-2xl" />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
