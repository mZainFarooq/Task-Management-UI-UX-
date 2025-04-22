import { IoMdAdd } from "react-icons/io";
import Button from "../../components/Button";
import { FaAngleRight } from "react-icons/fa6";
import TodoFormModal from "../../components/TodoFormModal";
import { useState } from "react";

const TodayTasks = () => {
  const [isTodoFormModal, setIsTodoFormModal] = useState(false);
  const handleClick = () => {
    setIsTodoFormModal(true);
  };
  return (
    <div>
      {isTodoFormModal && (
        <TodoFormModal setIsTodoFormModal={setIsTodoFormModal} />
      )}
      <div className="flex justify-between  items-center flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-semibold mt-4">Today Tasks</h1>
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

      <div className="bg-white p-4 mt-8  max-h-[80vh] overflow-auto">
        <input
          type="email"
          id="Email"
          placeholder="Search anything here"
          className="peer mt-0.5 placeholder:text-black text-black px-2 h-12 w-full rounded-lg border-gray-300 border text-[16px] "
        />
        <div className="px-2 mt-4">
          <div className="todoitem  border mt-2 border-[#ccc] rounded-sm flex px-4 py-2 gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div>
                <input type="checkbox" className=" cursor-pointer" />
              </div>
              <div>
                <p className="text-lg">Reserch Content Ideas</p>
              </div>
            </div>
            <div>
              <FaAngleRight className="cursor-pointer" />
            </div>
          </div>
          <div className="todoitem  border mt-2 border-[#ccc] rounded-sm flex px-4 py-2 gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div>
                <input type="checkbox" className=" cursor-pointer" />
              </div>
              <div>
                <p className="text-lg">Reserch Content Ideas</p>
              </div>
            </div>
            <div>
              <FaAngleRight className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayTasks;
