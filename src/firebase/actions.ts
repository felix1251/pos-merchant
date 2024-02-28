import app from "@/firebase";
import { IItemData } from "@/types/item.interface";
import { getDatabase, push, ref, remove, set } from "firebase/database";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

export const createItem = (
  item: IItemData,
  setSubmitting: (value: boolean) => void,
  navigate: NavigateFunction,
) => {
  const db = getDatabase(app);
  const newItemRef = push(ref(db, "items"));

  set(newItemRef, item)
    .then(() => {
      toast.success("Item successfully created");
      navigate("/");
    })
    .catch((err) => {
      toast.error(err.message);
      setSubmitting(false);
    });
};

export const updateItem = (
  item: IItemData,
  setSubmitting: (value: boolean) => void,
) => {
  const { id, ...otherItemData } = item;
  const db = getDatabase(app);
  const updateItemRef = ref(db, `items/${id}`);

  set(updateItemRef, otherItemData)
    .then(() => {
      toast.success("Item successfully updated");
      setSubmitting(false);
    })
    .catch((err) => {
      toast.error(err.message);
      setSubmitting(false);
    });
};

export const deleteItem = (
  id: string | undefined,
  mutate: (() => Promise<void>) | void | undefined,
) => {
  const db = getDatabase(app);
  const removeItemRef = ref(db, `items/${id}`);

  remove(removeItemRef)
    .then(() => {
      toast.success("Item successfully deleted");
      if (mutate) mutate();
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
