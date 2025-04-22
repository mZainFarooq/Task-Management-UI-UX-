import { CgUnavailable } from "react-icons/cg";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-semibold mt-4">
            Good Morning, M.Zain! 👋
          </h1>
          <h3 className="text-lg mt-1 ml-1 text-gray-700">
            Today, Wednesday 6 July 2025
          </h3>
        </div>
        {/* <div className="md:w-1/4  ">
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="mt-4  w-full font-normal text-lg placeholder:text-gray-700 text-gray-700 rounded border-[#ccc] bg-white h-10 shadow-xs px-2 "
          />
        </div> */}
      </div>
      <div className="flex gap-4 flex-col md:flex-row px-2">
        <div className="bg-white md:w-[40%] w-full py-4 px-4 mt-6 rounded-md min-h-[300px]">
          <div className="flex justify-between ">
            <h2 className="text-2xl">Today</h2>
            <span className="text-blue-500  text-sm cursor-pointer">
              View All
            </span>
          </div>
          <div className="flex space-x-2 mt-4">
            {/* <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat, tempora est aut ex nemo perferendis nisi
                ipsum pariatur
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat, tempora est aut ex nemo perferendis nisi
                ipsum pariatur
              </p>
            </div> */}
            <div className="flex items-center justify-center   w-full h-[300px]">
              <div>
                <CgUnavailable
                  size={100}
                  color="#ccc"
                  className="cursor-pointer ml-2"
                />
                <span className="text-gray-700">No Task Available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:w-[60%] w-full py-4 px-4 mt-6 rounded-md min-h-[300px]">
          <div className="flex justify-between ">
            <h2 className="text-2xl">Upcoming</h2>
            <span className="text-blue-500  text-sm cursor-pointer">
              View All
            </span>
          </div>
          <div className="flex space-x-2 mt-4">
            <div className="flex items-center justify-center   w-full h-[300px]">
              <div>
                <CgUnavailable
                  size={100}
                  color="#ccc"
                  className="cursor-pointer ml-2"
                />
                <span className="text-gray-700">No Task Available</span>
              </div>
            </div>
            {/* <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div> */}
          </div>
          {/* <div className="flex space-x-2 mt-4">
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-md w-1/2">
              <h4 className="text-lg m-2">Title</h4>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellat
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-white  w-full py-4 text-lg px-4 mt-6 rounded-md min-h-[400px] max-h-[600px] overflow-auto">
        <h1 className="text-xl font-semibold mt-4">Team Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
          <a
            href="#"
            className="block rounded-md border mt-4 border-gray-300 w-full p-4 shadow-sm sm:p-6"
          >
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div className="sm:order-last sm:shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-16 rounded-full object-cover sm:size-[72px]"
                />
              </div>

              <div className="mt-4 sm:mt-0">
                <h3 className="text-lg font-medium text-pretty text-gray-900">
                  How I built my first website with Nuxt, Tailwind CSS and
                  Vercel
                </h3>

                <p className="mt-1 text-sm text-gray-700">By John Doe</p>

                <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>
            </div>

            <dl className="mt-6 flex gap-4 lg:gap-6">
              <div>
                <dt className="text-sm font-medium text-gray-700">
                  Published on
                </dt>

                <dd className="text-xs text-gray-700">31/06/2025</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-700">
                  Reading time
                </dt>

                <dd className="text-xs text-gray-700">12 minutes</dd>
              </div>
            </dl>
          </a>
          {/* //alwasy show */}
          <div className="block rounded-md border mt-4  border-gray-300 w-full p-4 shadow-sm sm:p-6">
            <div className="flex justify-center h-full  items-center cursor-pointer">
              Invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
