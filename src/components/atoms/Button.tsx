import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
