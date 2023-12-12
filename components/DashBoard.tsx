import React from "react";
import { MdNotifications } from "react-icons/md";
import { Chart } from "./Chart";

function DashBoard() {
  return (
    <div className="border-r border-[#EDEBEA] px-4 py-8 mt-[60px] space-y-12">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[22px]">Hello Olalekan 👋🏼</p>
          <p>Welcome to Your Number One Source for Cocoa Excellence</p>
        </div>
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="search"
            className=" bg-[#FAFAFA] w-[280px] rounded-lg py-2 px-4 focus:outline-none focus:w-[300px] transition-[width] duration-300"
          />
          <img
            src="src/assets/notifications.png"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <p className="text-[16px] text-[#493B2E] font-medium">
          Level Chart OverView
        </p>
        <div className="mt-4">
          <Chart />
        </div>
        <div className="border-l-8 border-[#492b2e] pl-2  mt-12">
          <p className="space-x-1">
            <span className="font-medium text-[#492b2e] text-[20px]">
              COCOA
            </span>
            <span className="text-[#857C73]">Price</span>
          </p>
          <p className="space-x-2 font-medium text-[#492b2e]">
            <span className="text-[28px]">4,132.22</span>
            <span className="">+12.67 (+0.33%)</span>
          </p>
          <p className="text-[#857C73]">
            11:55:00AM EDT 10/27/2023 MI Indication
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
