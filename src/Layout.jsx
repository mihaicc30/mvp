import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase/config.jsx";

import MobileLeftNav from "./comp/navBars/MobileLeftNav";
import MobileHeader from "./comp/navBars/MobileHeader";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-[100svh] w-[100svw] relative overflow-hidden">
      {window.location.pathname !== "/" && <MobileHeader />}

      <div className={`basis-[95%] flex bg-gray-50 z-10 relative overflow-y-auto`}>
        {window.location.pathname !== "/" && <MobileLeftNav />}
        <div className="basis-[95%] overflow-hidden flex flex-col h-[100%] relative">
          <div className="flex flex-col gap-4 h-[100%] w-[100%] bg-[--c60]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
