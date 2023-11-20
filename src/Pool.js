import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Lanpool from "./landingcomp/Lanpool";
const Pool = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#EEFFF0] flex">
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <div className=" flex flex-col w-full mx-10">
        <Navbar />
        <Lanpool />
      </div>
    </div>
  );
};

export default Pool;
