import { IItemData } from "@/components/molecules/ItemForm";
import app from "@/firebase";
import { getDatabase, push, ref, set } from "firebase/database";

export const createItem = (item: IItemData) => {
  const db = getDatabase(app);
  const newItemRef = push(ref(db, "items"));

  set(newItemRef, item)
    .then(() => {
      alert("Item successfully saved!");
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
};
