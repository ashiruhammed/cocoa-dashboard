import React from "react";
import { MdDashboard, MdOutlineShoppingCart } from "react-icons/md";
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

function NavBar() {
  return (
    <div className="h-full bg-[#FAFAFA] flex flex-col items-center py-8">
      <div className="space-y-12">
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="w-[100px] h-[100px]"
        />
        <div className=" font-medium">
          <h4>Menu</h4>
          <ul className="pl-4 flex gap-6 flex-col mt-4 text-[#857C73]">
            {navList.map((item) => (
              <NavListComp label={item.label} Icon={item.Icon} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
