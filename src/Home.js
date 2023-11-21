import React from "react";
import img1 from "./images/image 1.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

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
        <div className="w-1/2 ml-28 mb-20 ">
          <h className="text-5xl font-inter font-semibold ml-80">
            HOW IT WORKS
          </h>

          <div class="flex flex-col gap-6 max-w-sm ml-3 p-4 bg-[#EEFFF0] mt-12 rounded-xl ">
            <input
              type="text"
              placeholder="From"
              className="py-2 px-5 border bg-[#ADFF45] border-gray-300 rounded-xl placeholder:text-black"
            />
            <input
              type="text"
              placeholder="To"
              className="py-2 px-5 border bg-[#ADFF45] border-gray-300 rounded-xl placeholder:text-black "
            />
            <input
              type="Date"
              className="py-2 px-5 border bg-[#ADFF45] border-gray-300 rounded-xl"
            />
            <input
              type="Time"
              className="py-2 px-5 border bg-[#ADFF45] border-gray-300 rounded-xl"
            />
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 rounded-xl">
              Search
            </button>
          </div>
        </div>

        <div className="w-1/2 mx-auto my-40">
          <p className="text-3xl mr-44 font-semibold font-inter text-center">
            Your Ride Is Just A Search Away! Enter Your Destination To Find
            Available Rides And Start Your Journey Hassle Free
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
