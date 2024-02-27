import React from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}: IMainLayoutProps) => {
  return <div>{children}</div>;
};

export default MainLayout;
