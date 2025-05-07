import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

function Notification({ text }: any) {
  return (
    <div className="border border-[#ccc] rounded-md flex px-4 py-3 mb-2 gap-3 items-center justify-between bg-white shadow-sm">
      <div className="flex gap-2 items-center">
        <input type="checkbox" className="cursor-pointer" />
        <p className="text-base text-gray-800">{text}</p>
      </div>
      <FaAngleRight className="cursor-pointer text-gray-500" />
    </div>
  );
}

const Notifications = () => {
  const tabs = ["View All", "Mentions", "Invites"];
  const [activeTab, setActiveTab] = useState("View All");

  const getNotifications = () => {
    switch (activeTab) {
      case "View All":
        return ["Research Content Ideas", "Plan Wireframes"];
      case "Mentions":
        return ["Develop UI"];
      case "Invites":
        return ["Deploy to Firebase"];
      default:
        return [];
    }
  };
  return (
    <div className="px-2 md:px-6 md:max-w-[80vw] 2xl:max-w-[70vw] mx-auto">
      <h1 className="text-3xl font-semibold mt-2">Notifications</h1>
      <div className="mt-4">
        <div className="flex gap-2 mb-4">
          {tabs.map((tab: any) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 w-full text-center cursor-pointer border-b-4 transition-all duration-300 ${
                activeTab === tab
                  ? "border-yellow-500 text-yellow-600 font-semibold bg-white"
                  : "border-transparent text-gray-600 bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {getNotifications().map((task, index) => (
            <Notification key={index} text={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
