import { IoMdAdd } from "react-icons/io";
import Button from "../../components/Button";
import TodoFormModal from "../../components/TodoFormModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TaskView from "../../components/TaskView";

function TaskItem({ text, handleClick }: any) {
  return (
    <div
      onClick={handleClick}
      className="border border-[#ccc] rounded-md  px-4 py-3 mb-2 gap-3  bg-white shadow-sm cursor-pointer hover:bg-gray-50"
    >
      <div className="flex gap-2 items-center">
        {text.length > 20 ? text.slice(0, 20) + "..." : text}
      </div>
    </div>
  );
}

const MyTasks = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const Alltasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log(Alltasks);

  const tabs = ["Pending", "In Progress", "Completed"];
  const [isTodoFormModal, setIsTodoFormModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Pending");
  const handleClick = () => {
    setIsTodoFormModal(true);
  };
  const filteredTasks = () => {
    return Alltasks.filter(
      (task) =>
        task.status?.toLowerCase().trim() === activeTab.toLowerCase().trim()
    );
  };
  console.log(activeTab);

  console.log(filteredTasks());
  return (
    <div className="px-2 md:px-6 md:max-w-[80vw] 2xl:max-w-[70vw] mx-auto">
      {open && <TaskView setOpen={setOpen} task={selectedTask} />}
      {isTodoFormModal && (
        <TodoFormModal setIsTodoFormModal={setIsTodoFormModal} />
      )}
      <div className="flex justify-between  items-center flex-col md:flex-row  ">
        <div>
          <h1 className="text-3xl font-semibold mt-4 text-center md:text-left">
            My Tasks
          </h1>
          <h3 className="text-lg mt-1 ml-1 text-gray-700">
            Today, Wednesday 6 July 2025
          </h3>
        </div>
        <div className="md:w-1/3  justify-end w-full md:mt-0 mt-4  flex">
          <Button
            handleClick={handleClick}
            color="bg-yellow-500"
            icon={<IoMdAdd size={22} />}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex gap-2 mb-4">
          {tabs.map((tab: any) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 w-full text-center cursor-pointer border-b-4 transition-all duration-300 ${
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
          {filteredTasks().map((task, index) => (
            <TaskItem
              key={index}
              handleClick={() => {
                setSelectedTask(task);
                setOpen(true);
              }}
              text={task.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
