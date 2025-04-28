import { ImHome } from "react-icons/im";
import { LuListTodo } from "react-icons/lu";
import { AuthenticatedPages } from "./router/routes";

export const SideMenuTasksListOptions = [
  {
    icon: <ImHome size={18} className="mt-0.5" />,
    text: "Home",
    link: AuthenticatedPages.dashboard,
  },
  {
    icon: <LuListTodo size={18} className="mt-0.5" />,
    text: "My Tasks",
    link: AuthenticatedPages.MyTasks,
  },
];

export const Colors = [
  "#facc15", // Yellow
  "#f87171", // Red
  "#4ade80", // Green
  "#60a5fa", // Blue
  "#a78bfa", // Light Purple
  "#fb923c", // Orange
  "#f472b6", // Pink
  "#34d399", // Teal
  "#c084fc", // Light Violet
  "#fde68a", // Soft Yellow
  "#93c5fd", // Soft Blue
  "#f9a8d4", // Soft Pink
];
