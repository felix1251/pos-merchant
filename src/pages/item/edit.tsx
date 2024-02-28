import { Breadcrumbs, FallbackLoading } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import { useFirebaseItem } from "@/firebase/hooks";

import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const ItemForm = React.lazy(() => import("@/components/molecules/ItemForm"));

const ItemEdit: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const { data, error, loading } = useFirebaseItem(params.id);

  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs crumbs={breadcrumbs} />
      <Suspense fallback={<FallbackLoading />}>
        <ItemForm
          label="Edit Item"
          isEditing
          itemData={data}
          loading={loading || error.length > 0}
          error={error}
        />
      </Suspense>
    </div>
  );
};

export default ItemEdit;

const breadcrumbs: ICrumb[] = [{ name: "Items", link: "/" }, { name: "Edit" }];
