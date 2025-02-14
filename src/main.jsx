import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { HomeUserPage } from "./component/pages/user/Home/HomeUserPage";
import { MenuUserPage } from "./component/pages/user/Menu/MenuUserPage";
import { LoginPage } from "./component/pages/Auth/Login/LoginPage";
import { RegisterPage } from "./component/pages/Auth/Register/RegisterPage";
import { DetailUserPage } from "./component/pages/user/Detail/DetailUserPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <HomeUserPage />,
  },
  {
    path: "/search",
    element: <MenuUserPage />,
  },
  {
    path: "/admin",
    element: <MenuUserPage />,
  },
  {
    path: "/search/detail",
    element: <DetailUserPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
