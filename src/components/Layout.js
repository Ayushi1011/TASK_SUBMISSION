import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import SupportPopup from "./SupportPopup";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="px-4 py-2">
          <Navbar />
        </div>
        <main className="px-6 pt-3 pb-6 h-full w-full overflow-auto">
          <Outlet />
        </main>
        <SupportPopup />
      </div>
    </div>
  );
}

export default Layout;
