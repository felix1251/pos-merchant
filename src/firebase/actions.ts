import { IItemData } from "@/components/molecules/ItemForm";
import app from "@/firebase";
import { getDatabase, push, ref, remove, set } from "firebase/database";

export const createItem = (
  item: IItemData,
  setSubmitting: (value: boolean) => void
) => {
  const db = getDatabase(app);
  const newItemRef = push(ref(db, "items"));

  set(newItemRef, item)
    .then(() => {
      setSubmitting(false);
    })
    .catch((err) => {
      alert("Error: " + err.message);
      setSubmitting(false);
    });
};

export const updateItem = (
  item: IItemData,
  setSubmitting: (value: boolean) => void
) => {
  const { id, ...otherItemData } = item;
  const db = getDatabase(app);
  const updateItemRef = ref(db, `items/${id}`);

  set(updateItemRef, otherItemData)
    .then(() => {
      setSubmitting(false);
    })
    .catch((err) => {
      alert("Error: " + err.message);
      setSubmitting(false);
    });
};

export const deleteItem = (
  id: string | undefined,
  mutate: (() => Promise<void>) | void | undefined
) => {
  const db = getDatabase(app);
  const removeItemRef = ref(db, `items/${id}`);

  remove(removeItemRef)
    .then(() => {
      if (mutate) mutate();
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
};
