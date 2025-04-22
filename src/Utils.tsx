import { ImHome } from "react-icons/im";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AuthenticatedPages } from "./router/routes";

export const SideMenuTasksListOptions = [
  {
    icon: <ImHome size={18} className="mt-0.5" />,
    text: "Home",
    link: AuthenticatedPages.dashboard,
  },
  {
    icon: <LuListTodo size={18} className="mt-0.5" />,
    text: "Today",
    link: AuthenticatedPages.TodayTasks,
  },
  {
    icon: <MdOutlineKeyboardDoubleArrowRight size={18} className="mt-0.5" />,
    text: "Upcoming",
    link: AuthenticatedPages.UpcomingTasks,
  },
];
