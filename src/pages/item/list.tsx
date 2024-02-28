import { Button, Table } from "@/atoms";
import { ITHeads } from "@/components/atoms/Table";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const Home: React.FunctionComponent = () => {
  const tHeads: ITHeads[] = [
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

  const data: any[] = [];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <h2 className="text-xl text-secondary font-semibold">Item List</h2>
        <Button>
          <div className="flex items-center gap-1.5">
            <LuPlus className="-ml-2 text-lg" />
            Add Item
          </div>
        </Button>
      </div>
      <Table tHeads={tHeads} loading={true} data={data} />
    </div>
  );
};

export default Home;
