import { Badge, Button, ErrorMessage, Table } from "@/atoms";
import { ITHeads } from "@/components/atoms/Table";
import { IItemData } from "@/components/molecules/ItemForm";
import { deleteItem } from "@/firebase/actions";
import { useFirebaseItems } from "@/firebase/hooks";
import React from "react";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { ImSpinner8 } from "react-icons/im";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const { data, loading, error, mutate } = useFirebaseItems();

  const tHeads: ITHeads[] = [
    {
      key: "name",
      name: "Name",
      headCustomClass: "text-primary",
      icon: <MdKeyboardArrowDown className="text-xl mt-0.5 -ml-1" />,
    },
    { key: "category", name: "Category" },
    {
      key: "options",
      name: "Options",
      render: (value: IItemData) => (
        <>
          {value.withOptions && (
            <div className="flex gap-1 flex-wrap">
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
        <div className="flex gap-2 justify-end">
          <button onClick={() => navigate(`items/${value.id}/edit`)}>
            <BiSolidEdit className="text-gray-400 text-2xl hover:text-primary" />
          </button>
          <button onClick={() => deleteItem(value.id, mutate)}>
            <BiSolidTrash className="text-gray-400  text-2xl hover:text-red-600" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-5 items-center justify-between">
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl text-secondary font-semibold">Item List</h2>
          {loading && (
            <ImSpinner8 className="text-2xl text-secondary animate-spin" />
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
