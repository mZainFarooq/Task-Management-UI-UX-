import { IoMdClose } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import Avatar from "./Avatar";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const TaskView = ({ setOpen, task }: any) => {
  console.log(task);

  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="fixed inset-0 bg-black/25 z-50 flex justify-end">
      <div className="fixed top-0 right-0 md:min-w-[350px] md:max-w-[500px] w-full h-full bg-white shadow-lg border-l border-gray-300 z-50 p-6 overflow-y-auto transition-transform duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Task</h2>
          <div className="flex gap-2">
            <button className="text-black bg-gray-100 p-1 rounded hover:text-blue-600 cursor-pointer">
              <TbEdit />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-black bg-gray-100 p-1 rounded hover:text-red-500 cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-lg font-semibold">{task?.title}</h2>
        <p className="text-base text-gray-600 mb-6 mt-2">{task?.description}</p>
        {/* Task details */}
        <div className="mb-8">
          <h3 className="text-base text-black font-semibold mb-2">
            Task details
          </h3>
          <div className="text-sm space-y-2">
            <div className="flex gap-4">
              <span className="text-gray-500">Status:</span>
              <span className="font-medium capitalize">{task?.status}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500">Due date:</span>
              <span className="font-medium">{task?.dueDate}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 ">List Names:</span>
              <div className="flex flex-wrap gap-2">
                {task?.list.length > 0 ? (
                  task?.list.map((list: any, index: any) => (
                    <span
                      className="font-medium bg-gray-50 px-2 py-0.5 rounded"
                      key={index}
                    >
                      {list.listName}
                    </span>
                  ))
                ) : (
                  <span>No list found</span>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 ">Tag Names:</span>
              <div className="flex flex-wrap gap-2">
                {task?.tags.length > 0 ? (
                  task?.tags.map((tag: any, index: any) => (
                    <span
                      className="font-medium bg-gray-50 px-2 py-0.5 rounded"
                      key={index}
                    >
                      {tag.tag}
                    </span>
                  ))
                ) : (
                  <span>"No tags found"</span>
                )}
              </div>
            </div>
            <div className="flex  gap-4">
              <span className="text-gray-500 ">Collaborators:</span>
              <div className="flex flex-wrap items-center -space-x-4">
                {task?.collaborators.length > 0 ? (
                  task?.collaborators.map(
                    (collaborator: any, index: number) => (
                      <Avatar
                        key={index}
                        user={collaborator.avatar}
                        userName={user?.name}
                      />
                    )
                  )
                ) : (
                  <span>No collaborators found</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div>
          <h3 className="text-sm text-gray-600 font-semibold mb-2">Activity</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                MG
              </div>
              <div>
                <p>
                  <strong>Maciej</strong> created the issue
                </p>
                <span className="text-xs text-gray-400">2 days</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                MG
              </div>
              <div>
                <p>
                  <strong>Maciej</strong> assigned <strong>Marcin</strong> to
                  the task
                </p>
                <span className="text-xs text-gray-400">1 day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
