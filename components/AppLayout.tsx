import React from "react";

interface IAppLayout {
  children: React.ReactNode;
}
function AppLayout({ children }: IAppLayout) {
  return (
    <div className="grid grid-cols-[18%_1fr_25%] h-[100vh] w-[100vw]">
      {children}
    </div>
  );
}

export default AppLayout;
