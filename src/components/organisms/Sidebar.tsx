import { CompanyLogo } from "@/atoms";
import { SidebarMenuItem } from "@/molecules";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import { IoBagCheck, IoBagHandle } from "react-icons/io5";

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="fixed bottom-0 min-w-full border-r bg-white md:sticky md:top-0 md:h-screen lg:min-w-72">
      <div className="hidden flex-col items-start justify-start p-5 md:flex">
        <CompanyLogo />
        <div className="-mt-2 ml-9 text-lg font-bold text-secondary/80">
          Merchant
        </div>
      </div>
      <div className="flex justify-between border-t-2 px-4 py-2 md:flex-col md:justify-start md:border-none md:p-0">
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
