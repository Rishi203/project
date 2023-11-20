import React from "react";
import Lanpublish from "./landingcomp/Lanpublish";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Publish = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#EEFFF0] flex">
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <div className=" flex flex-col w-full mx-10">
        <Navbar />
        <Lanpublish />
      </div>
    </div>
  );
};

export default Publish;
