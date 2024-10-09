import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">Log In</div>
        <input
          type="username"
          placeholder="Enter Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded mt-2">
            Login
          </button>
          <Link to="/signin" className="text-gray-500 hover:text-gray-200">
            Not having an account? SignIn Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
