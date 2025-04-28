import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../../components/Button";
import { MdOutlineEdit } from "react-icons/md";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <div className="bg-white rounded-lg text-black  mt-4">
      <div className="mt-4 p-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">My Profile</h1>
          <Button
            color="bg-yellow-500"
            text="Edit Profile"
            icon={<MdOutlineEdit size={20} />}
          />
        </div>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-48 object-cover cursor-pointer hover:opacity-85 rounded"
          />
        </div>
        <form className="space-y-2 mt-8">
          <div>
            <label htmlFor="Username">
              <span className="text-sm font-medium "> Username </span>
              <input
                type="text"
                id="username"
                disabled
                value="httpx__zain"
                className="mt-0.5 w-full rounded bg-gray-200  h-10 p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="Full Name">
              <span className="text-sm font-medium "> Full Name </span>

              <input
                disabled
                type="text"
                id="name"
                value="Muhammmad Zain"
                className="mt-0.5 w-full rounded bg-gray-200  h-10 p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="Email">
              <span className="text-sm font-medium "> Email </span>

              <input
                type="email"
                disabled
                id="Email"
                value="zainfarr47@gmail.com"
                className="mt-0.5 w-full rounded bg-gray-200  h-10 p-2"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
