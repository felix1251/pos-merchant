import { Breadcrumbs } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import React from "react";

const ItemCreate: React.FunctionComponent = () => {
  const breadcrumbs: ICrumb[] = [
    { name: "Items", link: "/" },
    { name: "Create" },
  ];

  return (
    <div>
      <Breadcrumbs crumbs={breadcrumbs} />
    </div>
  );
};

export default ItemCreate;
