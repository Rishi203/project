import React from "react";

const Lanpool = () => {
  return (
    <>
      <div className=" mx-20 max-w-7xl p-4">
        <div className="text-3xl font-bold text-black mb-6">POOL DETAILS</div>

        <div className="bg-black p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="rideId"
              className="block text-lg font-semibold mb-2 text-white"
            >
              RIDE ID:
            </label>
            <span id="rideId" className="text-blue-500">
              {/* Replace with dynamic data or retrieve from state */}
              ABC123
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-lg font-semibold mb-2 text-white"
            >
              USER ID:
            </label>
            <span id="userId" className="text-blue-500">
              {/* Replace with dynamic data or retrieve from state */}
              User123
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-lg font-semibold mb-2 text-white"
            >
              TIME:
            </label>
            <span id="time" className="text-blue-500">
              {/* Replace with dynamic data or retrieve from state */}
              12:00 PM
            </span>
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lanpool;
