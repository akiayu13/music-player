import logo from "../../assets/spotify-logo.svg";
import avatar from "../../assets/profile.svg";
const Sidebar = () => {
  return (
    <div className="h-[100px] w-full p-4 sm:p-8 flex justify-between sm:flex-col pb-0  sm:pb-4 sm:h-full sm:w-[20%]">
      <img src={logo} alt="spotify" className="w-24 cursor-pointer" />
      <img src={avatar} alt="avatar" className="w-12 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
