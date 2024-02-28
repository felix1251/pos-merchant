import { Breadcrumbs, FallbackLoading } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import React, { Suspense } from "react";

const ItemForm = React.lazy(() => import("@/components/molecules/ItemForm"));

const ItemCreate: React.FunctionComponent = () => {
  const breadcrumbs: ICrumb[] = [{ name: "Items", link: "/" }, { name: "New" }];

  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs crumbs={breadcrumbs} />
      <Suspense fallback={<FallbackLoading />}>
        <ItemForm label="Create Item" />
      </Suspense>
    </div>
  );
};

export default ItemCreate;
