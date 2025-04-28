import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import ColorPicker from "./ColorPicker";
import { Colors } from "../Utils";

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
  const [selectedColor, setSelectedColor] = useState(Colors?.[0]);
  console.log(selectedColor);
  return (
    <div
      className="fixed  inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-72   sm:min-w-md  rounded-lg bg-white p-6 shadow-lg">
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
          <div className="mt-4 p-2  ">
            <div className="flex items-center  border-gray-600 border px-2 rounded h-8">
              <div
                className="w-4 h-4 rounded-sm mt-0.5"
                style={{ backgroundColor: selectedColor }}
              ></div>
              <div className="w-full h-full">
                <input
                  type="text"
                  placeholder="Add New List"
                  className=" px-2  w-full placeholder:text-gray-600 h-full  outline-0 text-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <ColorPicker
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 ">
            <input
              type="text"
              placeholder="Add New Tag"
              style={{ backgroundColor: selectedColor }}
              className="peer mt-0.5 px-2 w-full placeholder:text-black rounded border border-black h-8 sm:text-sm"
            />
            <div className="mt-2">
              <ColorPicker
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </div>
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
