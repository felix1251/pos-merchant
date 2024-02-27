import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IAvatarProps {
  name: string;
  imageUrl?: string;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  name,
  imageUrl = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
}: IAvatarProps) => {
  return (
    <div className="rounded-full pl-1 pr-2 py-1 bg-primary/20 text-sm font-semibold text-primary flex items-center gap-2">
      <div className="w-7 mask mask-circle">
        <img src={imageUrl} />
      </div>
      {name}
      <MdKeyboardArrowDown className="text-xl mt-0.5 -ml-1" />
    </div>
  );
};

export default Avatar;
