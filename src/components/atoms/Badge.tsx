import React from "react";

interface IBadgeProps {
  name: string;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ name }: IBadgeProps) => {
  return (
    <div className="w-fit px-2 py-0.5 border border-primary text-primary text-xs rounded-xl">
      {name}
    </div>
  );
};

export default Badge;
