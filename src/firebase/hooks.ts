import { IItemData, ItemDataDefault } from "@/components/molecules/ItemForm";
import app from "@/firebase";
import { get, getDatabase, ref } from "firebase/database";
import { useCallback, useEffect, useState } from "react";

export const useFirebaseItems = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IItemData[]>([]);
  const [error, setError] = useState<string>("");

  const mutate = useCallback(async () => {
    setLoading(true);
    const db = getDatabase(app);
    const dbRef = ref(db, "items");
    try {
      const itemsSnapshot = await get(dbRef);
      if (itemsSnapshot.exists()) {
        const items = itemsSnapshot.val();
        const arrayItems = Object.keys(items).map((key) => {
          return { id: key, ...items[key] };
        });
        setData(arrayItems.reverse());
      } else {
        setData([]);
      }
    } catch (_err) {
      setError("Something went wrong");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    mutate();
  }, [mutate]);

  return { loading, data, error, mutate };
};

export const useFirebaseItem = (id: string | undefined) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IItemData>(ItemDataDefault);
  const [error, setError] = useState<string>("");

  const mutate = useCallback(async () => {
    setLoading(true);
    const db = getDatabase(app);
    const dbRef = ref(db, `items/${id}`);
    try {
      const itemsSnapshot = await get(dbRef);
      if (itemsSnapshot.exists()) {
        const items = itemsSnapshot.val();
        setData({ ...items, id });
      } else {
        setError("Item not exist");
      }
    } catch (_err) {
      setError("Something went wrong");
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    mutate();
  }, [mutate]);

  return { loading, data, error, mutate };
};
