import { Outlet } from "react-router-dom";
import TobBar from "./TobBar";
// import SideBar from "./SideBar";
import InnerSideBar from "./InnerSideBar";

export default function LayoutPublic() {

  return (
    <>
      <TobBar/>
      <div className="flex h-screen pt-10">
        {/* <SideBar/> */}
        <div className="w-[100%] bg-gray-700 mt-10 p-5 overflow-auto">
          <InnerSideBar/>
          <Outlet/>
        </div>
      </div>
    </>
  );
}