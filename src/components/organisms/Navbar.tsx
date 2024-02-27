import { Avatar } from "@/atoms";
import React from "react";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="h-20 w-full py-2.5 px-40 flex items-center">
      <div className="margin-max-screen grid justify-items-end">
        <Avatar name="Michele Bow" />
      </div>
    </nav>
  );
};

export default Navbar;
