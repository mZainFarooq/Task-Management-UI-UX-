const Profile = () => {
  return (
    <div className="bg-white text-black p-4 mt-4">
      <h1 className="text-3xl font-semibold">My Profile</h1>
      <div className="mt-4">
        <div className="">
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
                className="mt-0.5 w-full rounded border-gray-700 border h-10 p-2"
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
                className="mt-0.5 w-full rounded border-gray-700 border h-10 p-2"
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
                className="mt-0.5 w-full p-2 rounded border-gray-700 border h-10"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
