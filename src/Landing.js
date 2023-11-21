import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lansearch from "./landingcomp/Lansearch";

// import { HiMenuAlt3 } from "react-icons/hi";
// import { FaHome } from "react-icons/fa";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import Lanpublish from "./landingcomp/Lanpublish";

const MainContent = () => {
  return (
    <div>
      <Lansearch />
    </div>
  );
};

const Layout = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-50"></div>
      <div className="bg-[#EEFFF0] flex">
        <Sidebar open={open} toggleSidebar={toggleSidebar} />
        <div className=" flex flex-col w-full mx-10">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Layout;
