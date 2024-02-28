import { Breadcrumbs } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import { ItemForm } from "@/molecules";
import React from "react";

const ItemCreate: React.FunctionComponent = () => {
  const breadcrumbs: ICrumb[] = [{ name: "Items", link: "/" }, { name: "New" }];

  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs crumbs={breadcrumbs} />
      <ItemForm />
    </div>
  );
};

export default ItemCreate;
