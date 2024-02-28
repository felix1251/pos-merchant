import ItemCreate from "@/pages/item/create";
import ItemEdit from "@/pages/item/edit";
import Items from "@/pages/item/list";
import NotFoud from "@/pages/not_found";
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
