import { Button, ErrorMessage, Table } from "@/atoms";
import { ITHeads } from "@/components/atoms/Table";
import { IItemData } from "@/components/molecules/ItemForm";
import { useFirebaseItems } from "@/firebase/hooks";
import React from "react";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFirebaseItems();

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
    {
      key: "actions",
      name: "Actions",
      render: (value: IItemData) => (
        <div className="flex gap-2">
          <button onClick={() => navigate(`items/${value.id}/edit`)}>
            <BiSolidEdit className="text-gray-400 text-2xl hover:text-primary" />
          </button>
          <button>
            <BiSolidTrash className="text-gray-400  text-2xl hover:text-red-600" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h2 className="text-2xl text-secondary font-semibold">Item List</h2>
        <Button onClick={() => navigate("/items/new")}>
          <div className="flex items-center gap-1.5">
            <LuPlus className="-ml-2 text-lg" />
            Add Item
          </div>
        </Button>
      </div>
      {error && <ErrorMessage message={error} />}
      <Table tHeads={tHeads} loading={loading} data={data} />
    </div>
  );
};

export default Home;
