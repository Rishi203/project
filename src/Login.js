import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import fuser from "./images/fusername.jpg";
import fpass from "./images/Fpass.jpg";
import { useAuth } from "./AuthContext"; // Update the path

function Login() {
  const auth = useAuth();
  // Add this line to get the login function from the AuthContext

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Auth context:", auth);
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      if (response && response.data) {
        console.log(response.data);
        auth.login(response.data._id);
        // Save the user ID using the login function
        navigate("/Landing");
      } else {
        console.error("Invalid response from server:", response);
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
      setShowErrorPopup(true);
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Auth context:", auth);
      if (auth.isLoggedIn && auth.userId) {
        navigate("/Landing");
      }
    }, 100); // Add a slight delay (e.g., 100 milliseconds)

    return () => clearTimeout(timeoutId);
  }, [auth.isLoggedIn, auth.userId, navigate]);

  const ErrorModal = ({ onClose }) => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md z-50">
      <p className="text-red-500 text-center mb-4">
        Invalid credentials. Please try again.
      </p>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );

  return (
    <div className="bg-black">
      <div className="flex">
        <div className="left w-7/12 bg-black text-[#ADFF45] px-10 py-8 h-screen flex flex-col items-center justify-center">
          <Link to="/" className="font-extrabold mb-6 text-8xl mx-auto">
            URBAN LINK
          </Link>
          <div className="flex mx-auto text-white">
            <p className="mt-6 text-xl">Don’t have an account ?</p>
            <Link
              to="/Signup"
              className="font-extrabold mt-6 text-xl ml-2 hover:text-[#ADFF45]"
            >
              Signup
            </Link>
          </div>
        </div>

        <div className="right w-1/2 bg-[#CAFF87] px-10 py-8 h-screen rounded-l-3xl">
          <h1 className="font-semibold mb-4 text-4xl pt-16 pb-6 font-inter mx-60">
            Sign In
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
                  placeholder="Email or Username"
                  className="px-12 py-2 rounded-md mb-9 shadow-xl border border-black w-full"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
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
                  className="px-12 py-2 rounded-md border border-black mb-9 shadow-xl w-full"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>

              <button
                className="signinbtn font-bold mb-12 py-3 px-4 bg-black text-white text-xl rounded-xl shadow-lg hover:bg-gray-800"
                type="submit"
              >
                LOGIN
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

          {/* Error modal */}
          {showErrorPopup && (
            <ErrorModal onClose={() => setShowErrorPopup(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
