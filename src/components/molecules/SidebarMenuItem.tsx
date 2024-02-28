import React from "react";
import { Link } from "react-router-dom";

interface ISidebarMenusProps {
  icon: React.ReactNode;
  name: string;
  url?: string;
  active?: boolean;
}

const SidebarMenus: React.FunctionComponent<ISidebarMenusProps> = ({
  icon,
  name,
  url = "/",
  active = false,
}: ISidebarMenusProps) => {
  return (
    <Link
      to={url}
      className={`md:w-full rounded-lg md:rounded-none px-4 py-2.5 text-lg font-medium md:border-l-[6px] flex gap-4 items-center hover:bg-gray-100 ${active ? "border-primary text-primary" : "border-white text-secondary/70 hover:border-gray-100"}`}
    >
      {icon}
      <span className="hidden sm:block">{name}</span>
    </Link>
  );
};

export default SidebarMenus;
