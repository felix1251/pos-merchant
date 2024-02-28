import { Breadcrumbs } from "@/atoms";
import { ICrumb } from "@/components/atoms/Breadcrumbs";
import { useFirebaseItem } from "@/firebase/hooks";
import { ItemForm } from "@/molecules";
import React from "react";
import { useParams } from "react-router-dom";

const ItemEdit: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const { data, error, loading } = useFirebaseItem(params.id);

  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs crumbs={breadcrumbs} />
      <ItemForm
        label="Edit Item"
        isEditing
        itemData={data}
        loading={loading || error.length > 0}
        error={error}
      />
      {error && (
        <div className="font-medium text-4xl text-red-600">{error}</div>
      )}
    </div>
  );
};

export default ItemEdit;

const breadcrumbs: ICrumb[] = [{ name: "Items", link: "/" }, { name: "Edit" }];
