import DashboardNavbar from "@/components/shared/navbar";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container w-main m-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
