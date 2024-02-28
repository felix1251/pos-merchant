import { Avatar } from "@/atoms";
import React from "react";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="z-10 flex h-20 w-full items-center bg-white py-2.5">
      <div className="margin-max-screen grid h-fit justify-items-end">
        <Avatar name="Michele Bow" />
      </div>
    </nav>
  );
};

export default Navbar;
