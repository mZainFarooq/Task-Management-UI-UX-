import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../../components/Button";
import { MdDoneAll, MdOutlineEdit } from "react-icons/md";
import { useRef, useState } from "react";
import { TbCancel } from "react-icons/tb";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isEditing, setisEditing] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileRef: any = useRef(null);
  console.log(user);

  return (
    <div className=" md:max-w-[80vw] 2xl:max-w-[70vw] mx-auto">
      <div className=" rounded-lg text-black">
        <div className=" p-4">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">My Profile</h1>
            <div className="flex gap-2">
              <Button
                handleClick={() => {
                  setisEditing(!isEditing);
                  if (previewImage) {
                    setPreviewImage(null);
                  }
                }}
                color="bg-yellow-500"
                text={isEditing ? "Cancel" : "Edit Profile"}
                icon={
                  !isEditing ? (
                    <MdOutlineEdit size={20} />
                  ) : (
                    <TbCancel size={20} />
                  )
                }
              />
              {isEditing && (
                <Button
                  color="bg-yellow-500"
                  text={"Save Changes"}
                  icon={<MdDoneAll size={20} />}
                />
              )}
            </div>
          </div>
          <div className="relative mt-8 md:mt-6 w-48 h-48">
            {previewImage || user?.profilePic ? (
              <img
                src={previewImage || user?.profilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="w-full h-full bg-yellow-400 flex items-center justify-center rounded">
                <h1 className="text-[100px] text-white capitalize">
                  {user?.name?.charAt(0)}
                </h1>
              </div>
            )}

            <input
              type="file"
              accept=".jpg,.png"
              ref={fileRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setPreviewImage(imageUrl);
                }
              }}
              className="hidden"
            />
            {isEditing && (
              <button
                onClick={() => fileRef.current?.click()}
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
                title="Edit Profile Picture"
              >
                <MdOutlineEdit
                  size={20}
                  className="text-red-500
              "
                />
              </button>
            )}
          </div>

          <form className="space-y-2 mt-8">
            <div>
              <label htmlFor="Username">
                <span className="text-sm font-medium "> Username </span>
                <input
                  type="text"
                  id="username"
                  disabled={!isEditing}
                  value={user?.username}
                  className="mt-0.5 w-full  h-10 p-2 border border-[#ccc] rounded-md flex py-3 mb-2 gap-3 items-center  justify-between bg-white shadow-sm"
                />
              </label>
            </div>
            <div>
              <label htmlFor="Full Name">
                <span className="text-sm font-medium "> Full Name </span>
                <input
                  disabled={!isEditing}
                  type="text"
                  id="name"
                  value={user?.name}
                  className="mt-0.5 w-full  h-10 p-2 border border-[#ccc] rounded-md flex py-3 mb-2 gap-3 items-center justify-between bg-white shadow-sm"
                />
              </label>
            </div>
            <div>
              <label htmlFor="Email">
                <span className="text-sm font-medium "> Email </span>

                <input
                  disabled
                  type="email"
                  id="Email"
                  value={user?.email}
                  className="mt-0.5 w-full  h-10 p-2 border border-[#ccc] rounded-md flex py-3 mb-2 gap-3 items-center justify-between bg-white shadow-sm"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
