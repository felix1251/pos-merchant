import { Badge, Button, ErrorMessage, Table } from "@/atoms";
import { deleteItem } from "@/firebase/actions";
import { useFirebaseItems } from "@/firebase/hooks";
import { IItemData } from "@/types/item.interface";
import React from "react";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { ImSpinner8 } from "react-icons/im";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { data, loading, error, mutate } = useFirebaseItems();

  const tHeads = [
    {
      key: "name",
      name: "Name",
      headCustomClass: "text-primary",
      icon: <MdKeyboardArrowDown className="-ml-1 mt-0.5 text-xl" />,
    },
    { key: "category", name: "Category" },
    {
      key: "options",
      name: "Options",
      render: (value: IItemData) => (
        <>
          {value.withOptions && (
            <div className="flex flex-wrap gap-1 md:flex-nowrap ">
              {value.options &&
                value.options
                  .split(",")
                  .map((option) => <Badge key={option} name={option} />)}
            </div>
          )}
        </>
      ),
    },
    { key: "price", name: "Price" },
    { key: "cost", name: "Cost" },
    { key: "stock", name: "Stock" },
    {
      key: "actions",
      name: "Actions",
      headCustomClass: "flex justify-end",
      render: (value: IItemData) => (
        <div className="flex justify-end gap-2">
          <button onClick={() => navigate(`items/${value.id}/edit`)}>
            <BiSolidEdit className="text-2xl text-gray-400 hover:text-primary" />
          </button>
          <button onClick={() => deleteItem(value.id, mutate)}>
            <BiSolidTrash className="text-2xl  text-gray-400 hover:text-red-600" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-secondary">Item List</h2>
          {loading && (
            <ImSpinner8 className="animate-spin text-2xl text-secondary" />
          )}
        </div>
        <Button onClick={() => navigate("/items/new")}>
          <div className="flex items-center gap-1.5">
            <LuPlus className="-ml-2 text-lg" />
            Add Item
          </div>
        </Button>
      </div>
      {error && <ErrorMessage message={error} />}
      <Table
        tHeads={tHeads}
        loading={data.length ? false : loading}
        data={data}
      />
    </div>
  );
};

export default Home;
