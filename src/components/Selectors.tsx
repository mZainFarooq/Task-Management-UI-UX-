import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type SelectorsProps = {
  options:
    | { id: string; value: string }[]
    | {
        id: string;
        name: string;
        username: string;
        avatar: string;
      }[];
  isChecked: (value: string) => boolean;
  handleToggle: any;
  variant?: "tags" | "collaborators" | "list";
};

const Selectors: React.FC<SelectorsProps> = ({
  options,
  handleToggle,
  isChecked,
  variant = "default",
}) => {
  return (
    <div className="w-full ">
      {variant === "collaborators" && (
        <label
          htmlFor="due-date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Add Collaborators
        </label>
      )}
      <details
        className={`group relative overflow-hidden rounded border border-gray-300 shadow-sm `}
      >
        <summary className="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&::-webkit-details-marker]:hidden">
          <span className="text-sm font-medium">
            {variant === "tags"
              ? "Add Tags"
              : variant === "collaborators"
              ? "Add Collaborators"
              : "Add List"}
          </span>

          <span className="transition-transform group-open:-rotate-180 cursor-pointer">
            <MdKeyboardArrowDown />
          </span>
        </summary>

        <div className="divide-y divide-gray-300 border-t border-gray-300 bg-white">
          <fieldset className="p-3 ">
            <div className="flex flex-col items-start gap-3">
              {variant === "collaborators"
                ? options.map((person: any) => (
                    <label
                      key={person.id}
                      htmlFor={`collab-${person.id}`}
                      className="flex items-center w-full gap-4 p-2 border border-gray-200 rounded-lg hover:shadow transition cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`collab-${person.id}`}
                        className="size-5 cursor-pointer rounded border-gray-300"
                        checked={isChecked(person.id)}
                        onChange={() => handleToggle(person)}
                      />
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {person.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          @{person.username}
                        </span>
                      </div>
                    </label>
                  ))
                : options.map((obj: any) => (
                    <label
                      key={obj.id}
                      className="inline-flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        className="size-5 cursor-pointer rounded border-gray-300 shadow-sm"
                        checked={isChecked(obj.value)}
                        onChange={() => handleToggle(obj.value)}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {obj.value}
                      </span>
                    </label>
                  ))}
            </div>
          </fieldset>
        </div>
      </details>
    </div>
  );
};

export default Selectors;
