import { Breadcrumbs } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import { ItemForm } from "@/molecules";
import React from "react";

const ItemEdit: React.FunctionComponent = () => {
  const breadcrumbs: ICrumb[] = [
    { name: "Items", link: "/" },
    { name: "Edit" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs crumbs={breadcrumbs} />
      <ItemForm label="Edit Item" isEditing />
    </div>
  );
};

export default ItemEdit;
