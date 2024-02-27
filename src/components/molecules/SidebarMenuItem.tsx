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
      className={`px-4 py-2.5 text-lg font-medium border-l-[6px] flex gap-4 items-center hover:bg-gray-100 ${active ? "border-primary text-primary" : "border-white text-secondary/70 hover:border-gray-100"}`}
    >
      {icon}
      {name}
    </Link>
  );
};

export default SidebarMenus;
