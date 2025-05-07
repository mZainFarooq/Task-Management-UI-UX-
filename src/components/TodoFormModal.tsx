import { IoClose } from "react-icons/io5";
import Button from "./Button";
import React from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import Selectors from "./Selectors";
import { addTaskToUser } from "../firebase/taskService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

type FormProps = {
  setIsTodoFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  title: string;
  description?: string;
  list: { listName: string }[];
  tags: { tag: string }[];
  dueDate: string;
  collaborators?: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  }[];
};

const TodoFormModal: React.FC<FormProps> = ({ setIsTodoFormModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const {
    fields: listFields,
    append: appendList,
    remove: removeList,
  } = useFieldArray({
    control,
    name: "list",
  });

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });

  const { append: appendCollab, remove: removeCollab } = useFieldArray({
    control,
    name: "collaborators",
  });

  const watchedCollaborators = watch("collaborators");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Task Data: ", data);
    try {
      await addTaskToUser(
        user.uid,
        {
          title: data.title,
          description: data.description || "",
          collaborators: data.collaborators || [],
          tags: data.tags || [],
          dueDate: data.dueDate || "",
          list: data.list || [],
        },
        dispatch
      );
      setIsTodoFormModal(false);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const isChecked = (name: string, array: any[]) => {
    return array.some((item) => item.listName === name || item.tag === name);
  };

  // Toggle function for checkbox
  const handleToggle = (
    name: string,
    array: any[],
    appendFn: any,
    removeFn: any,
    key: "listName" | "tag"
  ) => {
    const index = array.findIndex((item) => item[key] === name);
    if (index !== -1) {
      removeFn(index);
    } else {
      appendFn({ [key]: name });
    }
  };

  const isCheckedCollaborator = (id: string): boolean => {
    return watchedCollaborators?.some((item) => item.id === id) ?? false;
  };

  const handleToggleCollaborator = (collaborator: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  }): void => {
    console.log(collaborator);
    const index = watchedCollaborators?.findIndex(
      (item) => item.id === collaborator.id
    );
    if (index !== -1) {
      removeCollab(index);
    } else {
      appendCollab(collaborator);
    }
  };

  const list = [
    {
      id: "kjwqadniuwe",
      value: "HTML",
    },
    {
      id: "kjwdqdniuwe",
      value: "CSS",
    },
    {
      id: "kwdjwqdniuwe",
      value: "Javascript",
    },
    {
      id: "kjwqdkniuwe",
      value: "React",
    },
    {
      id: "ksdjwqdkniuwe",
      value: "Next js",
    },
  ];
  const tags = [
    { id: "wlejf", value: "Tag 1" },
    { id: "wsdclejf", value: "Tag 2" },
    { id: "wlejasdf", value: "Tag 3" },
  ];

  const collaborators: any = [
    {
      id: "qwjlnd ",
      name: "Zain Farooq",
      username: "zain.dev",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: "elfwji",
      name: "Areeba Khan",
      username: "areeba.k",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: "lwendk",
      name: "Ahmed Ali",
      username: "ahmed.codes",
      avatar: "https://i.pravatar.cc/150?img=30",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-4xl scrollbar-hidden max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 id="modalTitle" className="text-2xl font-semibold text-gray-800">
            Add Task
          </h2>
          <button
            onClick={() => {
              setIsTodoFormModal(false);
            }}
            type="button"
            className="text-gray-400 cursor-pointer  hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Task Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              placeholder="Enter task description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex items-center gap-4 md:flex-row flex-col ">
            {/* List Selection */}
            <div className="flex items-center gap-2 w-full">
              <Selectors
                variant="list"
                options={list}
                isChecked={(name: string) => isChecked(name, listFields)}
                handleToggle={(name: string) =>
                  handleToggle(
                    name,
                    listFields,
                    appendList,
                    removeList,
                    "listName"
                  )
                }
              />
              <Selectors
                variant="tags"
                options={tags}
                isChecked={(name: string) => isChecked(name, tagFields)}
                handleToggle={(name: string) =>
                  handleToggle(name, tagFields, appendTag, removeTag, "tag")
                }
              />
            </div>
          </div>

          {/* Date Range */}
          <div className="flex w-full gap-4 ">
            {/* Due Date */}
            <div className="w-full md:w-1/4">
              <label
                htmlFor="due-date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Due Date
              </label>
              <input
                {...register("dueDate", { required: "Due Date is required" })}
                type="date"
                id="due-date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.dueDate && (
                <span className="text-red-500 text-sm">
                  {errors.dueDate.message}
                </span>
              )}
            </div>
            {/* Add Collaborators */}
            <Selectors
              options={collaborators}
              variant="collaborators"
              isChecked={isCheckedCollaborator}
              handleToggle={handleToggleCollaborator}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="submit"
              text="Done"
              color="bg-yellow-500 hover:bg-yellow-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoFormModal;
