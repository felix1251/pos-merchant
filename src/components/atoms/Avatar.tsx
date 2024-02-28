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
    <div className="flex items-center gap-2 rounded-full bg-primary/20 py-1 pl-1 pr-2 text-sm font-semibold text-primary">
      <div className="mask mask-circle w-7">
        <img src={imageUrl} />
      </div>
      {name}
      <MdKeyboardArrowDown className="-ml-1 mt-0.5 text-xl" />
    </div>
  );
};

export default Avatar;
