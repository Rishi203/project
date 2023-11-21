import React from "react";
import img1 from "./images/image 1.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { FaArrowDown, FaCaretDown } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Login");
  }

  const navigate1 = useNavigate();
  function handleClick1() {
    navigate1("/Signup");
  }

  return (
    <div className="Home bg-[#EEFFF0]">
      <div className="py-5 px-20 ">
        <nav class="bg-black p-4 rounded-xl h-20">
          <div class="container mx-auto flex">
            <div class="text-[#ADFF45] text-4xl font-extrabold px-6 ml-28 mr-10">
              URBAN LINK
            </div>
            <div>
              <ul class="flex space-x-6 py-2.5 px-6 text-lg">
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="lgbutton flex ml-auto mr-10 space-x-5">
              <button
                onClick={handleClick}
                className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed]"
              >
                Login
              </button>

              <button
                onClick={handleClick1}
                className="bg-[#EEFFF0] px-8 rounded-xl text-lg hover:bg-[#ADFF45]"
              >
                Signup
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="mx-28 text-6xl mt-48 font-semibold font-inter">
            RIDE TOGETHER, SAVE TOGETHER.
          </div>

          <div className="mx-28 text-2xl font-inter font-semibold my-5">
            Shared Rides, Split Costs: Your Pathway to Affordable Travel!
          </div>
        </div>

        <div className="w-1/2">
          <div className="mt-28 mr-16">
            <img src={img1} alt=""></img>
          </div>
        </div>
      </div>

      <div className="flex mt-40">
        <div className="w-1/2 mb-32 ml-64">
          <h className="text-5xl font-inter font-semibold ml-72">
            HOW IT WORKS
          </h>

          <body className="">
            <div className="container mx-24 my-8 flex justify-between">
              <div className="w-1/3 bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center mr-32 ">
                <div className="text-3xl text-blue-500 mb-2">
                  <FaCaretDown size={40} color="#5FAC00" />
                </div>
                <h2 class="text-lg font-semibold mb-2">Book ride</h2>
                <p>
                  Book your ride through your favorite ride booking app or book
                  a taxi.
                </p>
              </div>

              <div class="w-1/3 bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center mr-32">
                <div class="text-3xl text-green-500 mb-2">
                  <FaCaretDown size={40} color="#5FAC00" />
                </div>
                <h2 class="text-lg font-semibold mb-2 text-center">
                  Place Request
                </h2>
                <p>
                  Login to your UrbanLink account and place a new pool request.
                </p>
              </div>

              <div class="w-1/3 bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center">
                <div class="text-3xl text-yellow-500 mb-2">
                  <FaCaretDown size={40} color="#5FAC00" />
                </div>
                <h2 class="text-lg font-semibold mb-2 ">Pool accepted</h2>
                <p>Wait for your pool to be accepted and enjoy your savings.</p>
              </div>
            </div>
          </body>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
