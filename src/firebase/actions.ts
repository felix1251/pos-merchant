import { IItemData } from "@/components/molecules/ItemForm";
import app from "@/firebase";
import { getDatabase, push, ref, set } from "firebase/database";

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
