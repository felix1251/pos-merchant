import NotFoud from "@/pages/NotFoud";
import Items from "@/pages/items";
import ItemCreate from "@/pages/items/create";
import ItemEdit from "@/pages/items/edit";

import { MainLayout } from "@/templates";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Items />} />
      <Route path="/items/new" element={<ItemCreate />} />
      <Route path="/items/:id/edit" element={<ItemEdit />} />
      <Route path="*" element={<NotFoud />} />
    </Route>
  )
);
