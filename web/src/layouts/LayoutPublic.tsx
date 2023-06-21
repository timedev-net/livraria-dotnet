import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
// import SideBar from "./SideBar";
import SideBar from "./SideBar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function LayoutPublic() {



  return (
    <>
      <div className=" bg-slate-500 min-h-screen w-max pt-20">
        <TopBar />
        <div className="flex pt-10">
          <SideBar />
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}