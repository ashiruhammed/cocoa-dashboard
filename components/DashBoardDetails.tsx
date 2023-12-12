import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const userInfoList = [
  { label: "Platform Verificaton", percent: 70 },
  { label: "ID Verification", percent: 100 },
  { label: "Profile", percent: 75 },
  { label: "Social Media", percent: 25 },
  { label: "On PlatForm Activity", percent: 40 },
];

function DashBoardDetails() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] px-4 py-20 gap-6">
      <div className="flex gap-4 items-center">
        <img src="src/assets/user.png" alt="" />
        <div>
          <p className="font-medium text-[#493B2E]">Abdullahi Adebayo</p>
          <p className="text-[#857C73]">Farmer</p>
        </div>
      </div>
      <div className="border border-[#FAFAFA] rounded-md py-12 px-4 space-y-4">
        {userInfoList.map(({ label, percent }) => (
          <div className="flex gap-4 items-center">
            <div className="w-full grid grid-cols-[auto_1fr] gap-3 items-center">
              <p>{label}</p>
              <ProgressBar
                height="15px"
                isLabelVisible={false}
                className="w-full"
                completed={percent}
                bgColor={
                  percent > 50
                    ? "#34C759"
                    : percent < 30
                    ? "#FF3B30"
                    : "#FDCC0D"
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Recent Activities</h3>
        <div className="border border-[#FAFAFA] rounded-md h-full text-center flex justify-center flex-col">
          <p>No recent activities</p>
          <p>You haven't performed any activity.</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoardDetails;
