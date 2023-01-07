import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../navigation";

function PageLayout() {
  return (
    <div className="page-layout">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default PageLayout;
