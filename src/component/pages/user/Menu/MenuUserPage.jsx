import React from "react";
import { UserMenuView } from "../../../section/user/Menu/UserMenuView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";

export const MenuUserPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow bg-red-900 p-4">
        <UserMenuView />
      </div>
    </div>
  );
};
