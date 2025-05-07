const Avatar = ({ user, userName }: any) => {
  return (
    <div>
      {user ? (
        <img
          src={user}
          alt="Profile"
          className="w-[40px]  h-[40px] cursor-pointer object-cover hover:opacity-75 rounded-full"
        />
      ) : (
        <div className="w-[40px]  h-[40px] cursor-pointer bg-yellow-400 flex items-center justify-center  font-semibold hover:opacity-75 rounded-full">
          <h1 className="text-2xl text-white capitalize">
            {userName?.name?.charAt(0)}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Avatar;
