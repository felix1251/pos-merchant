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
      className={`flex items-center gap-4 rounded-lg px-4 py-2.5 text-lg font-medium hover:bg-gray-100 md:w-full md:rounded-none md:border-l-[6px] ${active ? "border-primary text-primary" : "border-white text-secondary/70 hover:border-gray-100"}`}
    >
      {icon}
      <span className="hidden sm:block">{name}</span>
    </Link>
  );
};

export default SidebarMenus;
