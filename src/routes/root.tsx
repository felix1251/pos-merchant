import NotFoud from "@/pages/not_found";
import { MainLayout } from "@/templates";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Items = React.lazy(() => import("@/pages/item/list"));
const ItemCreate = React.lazy(() => import("@/pages/item/create"));
const ItemEdit = React.lazy(() => import("@/pages/item/edit"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Items />} />
      <Route path="/items/new" element={<ItemCreate />} />
      <Route path="/items/:id/edit" element={<ItemEdit />} />
      <Route path="*" element={<NotFoud />} />
    </Route>,
  ),
);
