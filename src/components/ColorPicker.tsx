import { FaCheck } from "react-icons/fa6";
import { Colors } from "../Utils";
import React from "react";

type ColorPickerProps = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  console.log(selectedColor);
  return (
    <div>
      <ul className="flex flex-wrap justify-center mt-2 gap-2">
        {Colors?.map((color: string, index: number) => (
          <li
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-sm mt-0.5 cursor-pointer flex items-center justify-center ${
              selectedColor === color ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color }}
          >
            {selectedColor === color && (
              <FaCheck className="w-4 h-4 text-white" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorPicker;
