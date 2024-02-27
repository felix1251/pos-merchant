import React from "react";

interface ISidebarMenusProps {
  icon: React.ReactNode;
  name: string;
  active?: boolean;
}

const SidebarMenus: React.FunctionComponent<ISidebarMenusProps> = ({
  icon,
  name,
  active = false,
}: ISidebarMenusProps) => {
  return (
    <div
      className={`px-5 py-2.5 text-lg font-medium border-l-[6px] flex gap-2.5 items-center hover:bg-gray-100 ${active ? "border-primary text-primary" : "border-white text-secondary/70 hover:border-gray-100"}`}
    >
      {icon}
      {name}
    </div>
  );
};

export default SidebarMenus;
