import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

import Lanpublish from "./landingcomp/Lanpublish";
import Lansearch from "./landingcomp/Lansearch";
const MainContent = () => {
  

  return(
    <div><Lansearch/></div>
    );
};

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();

    // Redirect to the login page after logout
    navigate("/Login");
  };
  return (
    
    <nav className="bg-black p-4 rounded-xl h-20 mb-4  mt-2">
    <div className="container mx-auto flex">
      <div className="text-[#ADFF45] text-4xl font-extrabold px-6 ml-10 mr-10">URBAN LINK</div>
     
      <div className="lgbutton flex ml-auto mr-10 space-x-5">
      <button className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed]" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  </nav>
  );
};

const Sidebar = ({ open, toggleSidebar }) => {
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Publish", link: "/", icon: CiCirclePlus },
    { name: "Search", link: "/", icon: FaSearch },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-20"} duration-500 text-gray-100 px-4 rounded-r-lg`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={30}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu?.margin && "mt-5"
            } group flex items-center text-[30px]  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div className="text-ADFF45">
              {React.createElement(menu?.icon, {
                size: "40",
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

const Layout = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#EEFFF0] flex">
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <div className=" flex flex-col w-full mx-10">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;