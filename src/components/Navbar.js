import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { FaHome } from "react-icons/fa";
// import { CiCirclePlus } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
// import Lanpublish from "./landingcomp/Lanpublish";
// import Lansearch from "./landingcomp/Lansearch";

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
        <div className="text-[#ADFF45] text-4xl font-extrabold px-6 ml-10 mr-10">
          URBAN LINK
        </div>

        <div className="lgbutton flex ml-auto mr-10 space-x-5">
          <button
            className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
