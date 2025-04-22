import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { SideMenuTasksListOptions } from "../Utils";
import { Link, NavLink } from "react-router-dom";
import { AuthenticatedPages } from "../router/routes";
import Modal from "./Modal";

type SideMenuProps = {
  setIsSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideMenu: React.FC<SideMenuProps> = ({ setIsSideMenu }) => {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  const handleItemClick = () => {
    if (window.innerWidth <= 768) {
      setIsSideMenu(false);
    }
  };
  return (
    <div>
      <div className="flex h-screen overflow-auto flex-col justify-between border-e border-gray-100 bg-white">
        <div className="px-4 py-6">
          <div className="flex justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                to={AuthenticatedPages.dashboard}
                className="block text-yellow-400"
                onClick={handleItemClick}
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  color="#FACC15"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <MdOutlineClose
              size={20}
              className="cursor-pointer block md:hidden"
              onClick={() => {
                setIsSideMenu(false);
              }}
            />
          </div>
          <ul className="mt-6 space-y-1">
            <h3 className="font-semibold text-xs ">TASKS</h3>
            {SideMenuTasksListOptions.map((e, i) => {
              return (
                <NavLink
                  onClick={handleItemClick}
                  key={i}
                  to={e.link}
                  className={({ isActive }) =>
                    `flex text-gray-700 hover:bg-gray-100 cursor-pointer items-center py-3 px-2 space-x-2 rounded-lg ${
                      isActive
                        ? "bg-gray-100 font-semibold"
                        : "bg-white font-normal"
                    }`
                  }
                >
                  <li className="flex items-center space-x-2">
                    {e.icon}
                    <span className="block text-sm font-medium">{e.text}</span>
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <hr className="border-t-2 border-gray-100 mt-2" />
          <ul className="mt-4 space-y-1">
            <h3 className="font-semibold text-xs">LISTS</h3>
            <li
              onClick={handleItemClick}
              className="flex text-gray-700 hover:bg-gray-100 cursor-pointer items-center py-3 px-2 space-x-2 rounded-lg"
            >
              <div className="w-4 h-4 rounded-sm mt-0.5 bg-red-500"></div>
              <a href="#" className="block  text-sm font-medium ">
                Personal
              </a>
            </li>
            <li
              onClick={handleItemClick}
              className="flex text-gray-700 cursor-pointer hover:bg-gray-100 items-center py-3 px-2 space-x-2 rounded-lg"
            >
              <div className="w-4 h-4 rounded-sm mt-0.5 bg-teal-500"></div>
              <a href="#" className="block  text-sm font-medium ">
                Work
              </a>
            </li>
            <li
              onClick={handleItemClick}
              className="flex text-gray-700 cursor-pointer hover:bg-gray-100  items-center py-3 px-2 space-x-2 rounded-lg"
            >
              <div className="w-4 h-4 rounded-sm mt-0.5 bg-yellow-300"></div>
              <a href="#" className="block  text-sm font-medium ">
                Team
              </a>
            </li>
            <li
              onClick={() => {
                setIsListModalOpen(true);
              }}
              className="flex text-gray-700 cursor-pointer hover:bg-gray-100  items-center py-3 px-2 space-x-2 rounded-lg"
            >
              <TbPlaylistAdd size={20} className="mt-0.5" />
              <span className="block  text-sm font-medium ">Add New List</span>
            </li>
            {isListModalOpen && (
              <Modal
                isListModalOpen={isListModalOpen}
                setIsListModalOpen={setIsListModalOpen}
              />
            )}
          </ul>
          <hr className="border-t-2 border-gray-100 mt-2" />
          <h3 className="font-semibold text-xs mt-2 ">TAGS</h3>
          <ul className=" flex gap-2 flex-wrap mt-4">
            <li className="flex  text-gray-700 cursor-pointer mt-1 bg-teal-100 items-center py-1.5 px-3 space-x-2 rounded-lg font-medium text-sm">
              Tag 1
            </li>

            <li
              onClick={() => {
                setIsTagModalOpen(true);
              }}
              className="flex  text-gray-700 mt-1 bg-teal-100 items-center py-1.5 px-3 rounded-lg font-medium text-sm space-x-2 cursor-pointer"
            >
              <TbPlaylistAdd size={18} className="mt-0.5" />
              <span>Add Tag</span>
            </li>
            {isTagModalOpen && (
              <Modal
                isTagModalOpen={isTagModalOpen}
                setIsTagModalOpen={setIsTagModalOpen}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
