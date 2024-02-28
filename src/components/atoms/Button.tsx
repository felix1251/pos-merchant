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
      className="px-5 py-2 text-sm bg-primary text-white font-medium rounded-md hover:bg-primary/90 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
