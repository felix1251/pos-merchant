import { CompanyLogo } from "@/atoms";
import { SidebarMenuItem } from "@/molecules";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import { IoBagCheck, IoBagHandle } from "react-icons/io5";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="sticky top-0 h-screen min-w-72 bg-white border-r">
      <div className="p-5 flex flex-col justify-start items-start">
        <CompanyLogo />
        <div className="text-secondary font-bold text-lg -mt-2 ml-9">
          Merchant
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <SidebarMenuItem
          name="Items"
          icon={<IoBagHandle className="text-2xl" />}
          active
        />
        <SidebarMenuItem
          name="Orders"
          icon={<IoBagCheck className="text-2xl" />}
        />
        <SidebarMenuItem name="Users" icon={<FaUsers className="text-2xl" />} />
      </div>
    </div>
  );
};

export default Sidebar;
