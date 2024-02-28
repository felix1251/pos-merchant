import React from "react";

interface IBadgeProps {
  name: string;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ name }: IBadgeProps) => {
  return (
    <div className="w-fit rounded-xl border border-primary px-2 py-0.5 text-xs text-primary">
      {name}
    </div>
  );
};

export default Badge;
