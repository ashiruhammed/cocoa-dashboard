import React from "react";

interface IAppLayout {
  children: React.ReactNode;
}
function AppLayout({ children }: IAppLayout) {
  return (
    <div className="grid grid-cols-[15%_1fr_30%] h-[100vh] w-[100vw]">
      {children}
    </div>
  );
}

export default AppLayout;
