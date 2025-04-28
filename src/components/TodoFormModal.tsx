import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { TbPlaylistAdd } from "react-icons/tb";
import React from "react";

type FormProps = {
  setIsTodoFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoFormModal: React.FC<FormProps> = ({ setIsTodoFormModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-lg scrollbar-hidden max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 id="modalTitle" className="text-2xl font-semibold text-gray-800">
            Add Task
          </h2>
          <button
            onClick={() => {
              setIsTodoFormModal(false);
            }}
            type="button"
            className="text-gray-400 cursor-pointer  hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Task Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter task description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* List Selection */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="list"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              List
            </label>
            <select
              id="list"
              name="list"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="team">Team</option>
            </select>
          </div>
          {/* Tag Selection */}
          <div className="flex mt-4 items-center space-x-2">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tags
            </label>
            <ul className="flex flex-wrap items-center gap-2">
              <li className=" text-gray-700 cursor-pointer bg-gray-200 items-center py-1 px-2  rounded">
                Tag 1
              </li>
              <button
                type="button"
                className="flex   text-gray-700 cursor-pointer bg-gray-200 items-center py-1 px-2 space-x-1 rounded"
              >
                <TbPlaylistAdd size={20} className="mt-0.5" />
                <span className="block  text-sm font-medium ">Add Tag</span>
              </button>
            </ul>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="from-date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                From Date
              </label>
              <input
                type="date"
                id="from-date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="to-date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                To Date
              </label>
              <input
                type="date"
                id="to-date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button text="Done" color="bg-yellow-500 hover:bg-yellow-400" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoFormModal;
