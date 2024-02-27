import { router } from "@/routes/root";
import React from "react";
import { RouterProvider } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return <RouterProvider router={router} />;
};

export default App;
