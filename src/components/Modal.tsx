import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

type ModalProps = {
  isListModalOpen?: boolean;
  setIsListModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isTagModalOpen?: boolean;
  setIsTagModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal: React.FC<ModalProps> = ({
  isListModalOpen,
  isTagModalOpen,
  setIsTagModalOpen,
  setIsListModalOpen,
}) => {
  return (
    <div
      className="fixed  inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full  max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <h2
            id="modalTitle"
            className="text-xl font-semibold text-gray-900 sm:text-2xl"
          >
            {isListModalOpen ? "Create New List" : "Create New Tag "}
          </h2>

          <button
            onClick={() => {
              if (isListModalOpen && setIsListModalOpen) {
                setIsListModalOpen(false);
              } else if (isTagModalOpen && setIsTagModalOpen) {
                setIsTagModalOpen(false);
              }
            }}
            type="button"
            className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <IoClose />
          </button>
        </div>

        {isListModalOpen ? (
          <div className="mt-4 ">
            <input
              type="text"
              placeholder="Add New List"
              className="peer mt-0.5 px-2 w-full placeholder:text-black rounded border border-black h-8 sm:text-sm"
            />
            <div className="mt-2">
              <label htmlFor="colorSelect" className="">
                Choose a color:
              </label>
              <select
                className="w-full h-8 mt-0.5  border border-black"
                id="colorSelect"
                name="color"
              >
                <option value="">Select a color</option>
                <option value="red" className="">
                  Green
                </option>
                <option value="red" className="">
                  Orange
                </option>
                <option value="red" className="">
                  Blue
                </option>
                <option value="red" className="">
                  Purple
                </option>
              </select>
            </div>
          </div>
        ) : (
          <div className="mt-4 ">
            <input
              type="text"
              placeholder="Add New Tag"
              className="peer mt-0.5 px-2 w-full placeholder:text-black rounded border border-black h-8 sm:text-sm"
            />
          </div>
        )}
        <footer className="mt-6 flex justify-end gap-2">
          <Button text="Done" color="bg-yellow-500 hover:bg-yellow-400" />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
