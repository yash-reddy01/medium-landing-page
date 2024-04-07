export const Profile = ({ name, icon, css }) => {
  return (
    <div
      className={`border border-black flex items-center py-2 px-3 mx-2 md:mx-3 border-l-0 border-r-0 text-base md:text-xl ${css}`}
      title={name}
    >
      <div className="rounded-full border border-black mr-2 flex-shrink-0">
        <img
          src={icon}
          alt=""
          className="w-6 h-6 md:w-10 md:h-10 rounded-full"
        />
      </div>
      <div className="flex-grow overflow-hidden whitespace-nowrap">{name}</div>
    </div>
  );
};