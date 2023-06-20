import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
// import SideBar from "./SideBar";
import SideBar from "./SideBar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function LayoutPublic() {
 
  

  return (
    <div className=" bg-slate-500 h-[100vh]">
      <TopBar/>
      <div className="flex pt-10">
        <div className="w-[100%]  mt-10 p-5 overflow-auto">
          <SideBar/>
          <Outlet/>
        </div>
          <ToastContainer />
      </div>
    </div>
  );
}