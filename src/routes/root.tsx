import Home from "@/pages/Home";
import { MainLayout } from "@/templates";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);
