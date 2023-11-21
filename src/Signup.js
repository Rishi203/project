import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import fuser from "./images/fusername.jpg";
import fpass from "./images/Fpass.jpg";
import fmessage from "./images/fmessage.jpg";
import fphone from "./images/fphone.jpg";
// import fgender from './images/fgender.jpg';
import fcal from "./images/fcal.jpg";

function Signup() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dob: "",
    gender: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        dataToSend
      );

      console.log("Server response:", response);

      if (response && response.data) {
        console.log("Response data:", response.data);

        if (response.status === 201) {
          setSuccessMessage(
            "Successfully registered. Please login to go into your account."
          );
        } else if (response.status === 409) {
          console.log("User already exists:", response.data);

          setSuccessMessage("User already exists. Please log in.");
        } else {
          console.error("Unexpected status code:", response.status);
        }

        setShowPopup(true);
      } else {
        console.error("Invalid response from server:", response);
      }
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setTimeout(() => {
        setShowPopup(false);
        setSuccessMessage("");
        setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          dob: "",
          gender: "",
        });
      }, 5000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSuccessMessage("");
  };

  return (
    <div className="bg-black">
      <div className="flex">
        <div className="left w-7/12 bg-black text-[#ADFF45] px-10 py-8 h-screen flex flex-col items-center justify-center">
          <Link to="/" className="font-extrabold mb-6 text-8xl mx-auto">
            URBAN LINK
          </Link>
          <div className="flex mx-auto text-white">
            <p className="mt-6 text-xl">Already have an account ?</p>
            <Link
              to="/Login"
              className="font-extrabold mt-6 text-xl ml-2 hover:text-[#ADFF45]"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="right w-1/2 bg-[#CAFF87] px-10 py-8 h-screen rounded-l-3xl">
          <h1 className="font-semibold mb-2 text-4xl pt-4 pb-6 font-inter mx-28">
            Sign Up To Get Started
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="inputbox flex flex-col mx-28">
              <div className="relative flex">
                <span>
                  <img
                    src={fuser}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="text"
                  placeholder="Fullname"
                  className="px-12 py-2 rounded-md mb-4 shadow-xl border border-black w-full"
                  name="userName"
                  onChange={handleChange}
                  value={formData.userName}
                  required
                ></input>
              </div>

              <div className="relative flex">
                <span>
                  <img
                    src={fmessage}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  className="px-12 py-2 rounded-md border border-black mb-4 shadow-xl w-full"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                ></input>
              </div>

              <div className="relative flex">
                <span>
                  <img
                    src={fpass}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="px-12 py-2 rounded-md border border-black mb-4 shadow-xl w-full"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                ></input>
              </div>

              <div className="relative flex">
                <span>
                  <img
                    src={fpass}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="px-12 py-2 rounded-md border border-black mb-4 shadow-xl w-full"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                ></input>
              </div>

              <div className="relative flex">
                <span>
                  <img
                    src={fphone}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="px-12 py-2 rounded-md border border-black mb-4 shadow-xl w-full"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                ></input>
              </div>

              <div className="relative flex">
                <span>
                  <img
                    src={fcal}
                    className="w-6 h-6 absolute ml-4 mt-2"
                    alt=""
                  ></img>
                </span>
                <input
                  type="text"
                  placeholder="DOB"
                  className="px-12 py-2 rounded-md border border-black mb-4 shadow-xl w-full"
                  name="dob"
                  onChange={handleChange}
                  value={formData.dob}
                  required
                ></input>
              </div>

              <div className="flex mx-auto mb-2" required>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="MALE"
                  className="mr-2"
                  onChange={handleChange}
                  checked={formData.gender === "MALE"}
                />
                <label htmlFor="male" className="mr-4">
                  MALE
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="FEMALE"
                  className="mr-2"
                  onChange={handleChange}
                  checked={formData.gender === "FEMALE"}
                />
                <label htmlFor="female">FEMALE</label>
              </div>

              <button
                type="submit"
                className="signinbtn font-bold mb-5 py-3 px-4 bg-black text-white text-xl rounded-xl shadow-lg hover:bg-gray-800"
              >
                SIGNUP
              </button>

              <hr className="border border-black mb-2"></hr>

              <p className="font-bold text-xl mx-auto">OR</p>

              <button className="flex flex-row text-base rounded-lg bg-[#CAFF87] text-black border border-black px-24 py-3 my-2 font-semibold hover:bg-[#D5FFA1]">
                <span>
                  <img
                    className="h-7 w-7 rounded-full mx-2"
                    src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
                    alt="google"
                  ></img>
                </span>
                Continue with Google
              </button>
            </div>
          </form>

          {/* Display success message as a Tailwind CSS popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-10">
              <div className="bg-white p-6 rounded shadow-lg">
                <p className="text-lg">{successMessage}</p>
                <button
                  className="mt-4 bg-black text-white py-2 px-4 rounded"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
