import SideMenu from "../components/SideMenu";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSideMenu, setIsSideMenu] = useState(true);
  return (
    <div className="flex">
      <div
        className={`  z-10 absolute md:static  ${
          isSideMenu ? "block w-full  md:w-[30%] lg:w-[20%]" : "hidden w-screen"
        }`}
      >
        <SideMenu setIsSideMenu={setIsSideMenu} />
      </div>
      <div className="flex-1  w-[70%] lg:w-[75%] ">
        <Navbar isSideMenu={isSideMenu} setIsSideMenu={setIsSideMenu} />

        <main className=" bg-gray-200 h-screen pt-18 pb-4 overflow-y-auto scroll-smooth scrollbar-hidden px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
