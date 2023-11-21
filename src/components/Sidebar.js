import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ open, toggleSidebar }) => {
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Search", link: "/Landing", icon: FaSearch },
    { name: "Publish", link: "/publish", icon: CiCirclePlus },
    { name: "Review", link: "/review", icon: FaStar },
    { name: "Pool", link: "/pool", icon: FaCar },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-50" : "w-20"
      } duration-500 text-gray-100 px-4 rounded-r-lg`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={30}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="mt-28 flex flex-col gap-8 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu?.margin && "mt-5"
            } group flex items-center text-[20 px]  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div className="text-ADFF45">
              {React.createElement(menu?.icon, {
                size: "35",
                style: { fill: "#ADFF45" },
              })}
            </div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
