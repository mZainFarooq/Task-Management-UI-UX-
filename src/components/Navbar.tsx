import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthenticatedPages } from "../router/routes";
import { handleLogout } from "../firebase/authService";

type NavbarProps = {
  isSideMenu: boolean;
  setIsSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ isSideMenu, setIsSideMenu }) => {
  const navigate = useNavigate();
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <header
      className={`bg-white  fixed top-0 shadow-xs    ${
        !isSideMenu ? "w-full" : "w-[70%] lg:w-[80%]"
      }   `}
    >
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <CgMenuLeft
            size={28}
            className={`cursor-pointer transition-all duration-75 ${
              isSideMenu ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => {
              setIsSideMenu(!isSideMenu);
            }}
          />
          <div className="md:flex md:items-center md:gap-12">
            <div className="">
              <button
                onClick={() => {
                  setIsDropDown(!isDropDown);
                }}
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover cursor-pointer hover:opacity-85"
                />
              </button>

              {isDropDown && (
                <div
                  className="absolute  end-8 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-2xl"
                  role="menu"
                >
                  <div className="p-2">
                    <NavLink
                      onClick={() => {
                        setIsDropDown(false);
                      }}
                      to={AuthenticatedPages.Profile}
                      className={({ isActive }) =>
                        isActive
                          ? "block rounded-lg mt-2 px-4 py-2 text-sm text-black bg-gray-200 hover:bg-gray-100"
                          : "block rounded-lg px-4 mt-2 py-2 text-sm text-black hover:bg-gray-100"
                      }
                      role="menuitem"
                    >
                      My profile
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        setIsDropDown(false);
                      }}
                      to={AuthenticatedPages.Notifications}
                      className={({ isActive }) =>
                        isActive
                          ? "block rounded-lg px-4 mt-2 py-2 text-sm text-black bg-gray-200 hover:bg-gray-100"
                          : "block rounded-lg px-4 py-2 mt-2 text-sm text-black hover:bg-gray-100"
                      }
                      role="menuitem"
                    >
                      Notifications
                    </NavLink>
                  </div>

                  <div className="p-2 ">
                    <form method="POST" action="#">
                      <button
                        onClick={() => {
                          handleLogout(navigate);
                          setIsDropDown(false);
                        }}
                        type="button"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-200 cursor-pointer"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
