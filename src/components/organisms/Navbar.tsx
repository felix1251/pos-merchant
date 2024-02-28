import { Avatar } from "@/atoms";
import React from "react";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="h-20 w-full py-2.5 flex items-center bg-white z-10">
      <div className="margin-max-screen grid justify-items-end h-fit">
        <Avatar name="Michele Bow" />
      </div>
    </nav>
  );
};

export default Navbar;
