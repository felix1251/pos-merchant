import { Table } from "@/atoms";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Home: React.FunctionComponent = () => {
  const tHeads = [
    {
      key: "name",
      name: "Name",
      headCustomClass: "text-primary",
      icon: <MdKeyboardArrowDown className="text-xl mt-0.5 -ml-1" />,
    },
    { key: "price", name: "Price" },
    { key: "category", name: "Category" },
    { key: "options", name: "Options" },
    { key: "cost", name: "Cost" },
    { key: "stock", name: "Stock" },
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl text-secondary font-semibold">Item List</h2>
      <Table tHeads={tHeads} loading={true} />
    </div>
  );
};

export default Home;
