import React, { ReactNode } from "react";

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  color?: string;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text = "Add Task",
  icon,
  color,
  type = "button",
  handleClick,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={` rounded-sm  px-4 cursor-pointer py-2 text-sm font-medium text-black transition  items-center  flex space-x-2    ${
        color ? color : "bg-transparent"
      }`}
    >
      {icon && <span className="block">{icon}</span>}
      <span className="block">{text}</span>
    </button>
  );
};

export default Button;
