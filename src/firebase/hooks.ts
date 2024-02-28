import { IItemData } from "@/components/molecules/ItemForm";
import app from "@/firebase";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const useFirebaseItems = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IItemData[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const db = getDatabase(app);
      const dbRef = ref(db, "items");
      try {
        const itemsSnapshot = await get(dbRef);
        if (itemsSnapshot.exists()) {
          setData(Object.values(itemsSnapshot.val()));
        } else {
          setError("items not exist");
        }
      } catch (_err) {
        setError("something went wrong");
      }

      setLoading(false);
    };

    getData();
  }, []);

  return { loading, data, error };
};
