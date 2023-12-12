import React from "react";
import {
  MdDashboard,
  MdHelp,
  MdLogout,
  MdOutlineShoppingCart,
  MdSettings,
} from "react-icons/md";
import NavListComp from "./NavListComp";
import { FaListCheck, FaShop } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const navList = [
  { label: "Dashboard", Icon: MdDashboard },
  { label: "Cocoa Listing", Icon: FaListCheck },
  { label: "Order", Icon: MdOutlineShoppingCart },
  { label: "Market Place", Icon: FaShop },
  { label: "Profile", Icon: FaUser },
];

const footerList = [
  { label: "Settings", Icon: MdSettings },
  { label: "Help", Icon: MdHelp },
  { label: "Logout", Icon: MdLogout },
];

function NavBar() {
  return (
    <div className="h-full bg-[#FAFAFA] flex flex-col justify-between items-center py-16">
      <div className="space-y-12">
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="w-[100px] h-[100px]"
        />
        <div className=" font-medium">
          <h4>Menu</h4>
          <ul className="pl-4 space-y-6 mt-4 text-[#857C73]">
            {navList.map((item) => (
              <NavListComp label={item.label} Icon={item.Icon} />
            ))}
          </ul>
        </div>
      </div>

      <div className="text-[#857C73] flex flex-col items-center gap-8">
        <ul className="space-y-6">
          {footerList.map((item) => (
            <NavListComp label={item.label} Icon={item.Icon} />
          ))}
        </ul>
        <p className="font-medium text-[#69330D]">Copyright 2023 Cocoa World</p>
      </div>
    </div>
  );
}

export default NavBar;
