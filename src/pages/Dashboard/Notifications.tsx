import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const notificationsData = {
  all: [
    {
      id: 1,
      user: "Ali Raza",
      avatar: "https://i.pravatar.cc/40?img=1",
      message: "liked your post",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Ayesha Khan",
      avatar: "https://i.pravatar.cc/40?img=2",
      message: "commented on your photo",
      time: "4 hours ago",
    },
  ],
  mentions: [
    {
      id: 3,
      user: "Usman Tariq",
      avatar: "https://i.pravatar.cc/40?img=3",
      message: "mentioned you in a comment",
      time: "1 day ago",
    },
  ],
  invites: [
    {
      id: 4,
      user: "Hamza Ali",
      avatar: "https://i.pravatar.cc/40?img=4",
      message: "invited you to join a group",
      time: "3 days ago",
    },
  ],
};

const Notifications = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderNotification = (data: any) => (
    <ul className="space-y-4 mt-4">
      {data.map((n: any) => (
        <li
          key={n.id}
          className="flex items-start gap-3 bg-gray-200 p-3 rounded-lg shadow-sm"
        >
          <img
            src={n.avatar}
            alt={n.user}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm">
              <span className="font-bold">{n.user}</span> {n.message}
            </p>
            <span className="text-xs text-gray-500">{n.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white text-black p-4 mt-4">
      <h1 className="text-3xl font-semibold">Notifications</h1>

      <div className="mt-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex gap-2 bg-gray-200 rounded-md p-2">
            {["View All", "Mentions", "Invites"].map((tab, i) => (
              <Tab
                key={tab}
                className={`p-2 text-center font-semibold cursor-pointer rounded-md w-full  hover:bg-yellow-500 ${
                  tabIndex === i ? "bg-yellow-400 " : "bg-transparent "
                }`}
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-semibold mt-4">All Notifications</h2>
            {renderNotification(notificationsData.all)}
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-semibold mt-4">Mentions</h2>
            {renderNotification(notificationsData.mentions)}
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-semibold mt-4">Invites</h2>
            {renderNotification(notificationsData.invites)}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
