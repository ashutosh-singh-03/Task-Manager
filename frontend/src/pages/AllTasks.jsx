import React from "react";
import Cards from "../components/Home/Cards";
import { IoIosAddCircleOutline } from "react-icons/io";

const AllTasks = () => {
  return (
    <div>
      <div className="w-full flex justify-end px-4 py-2">
        <button>
          <IoIosAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
        </button>
      </div>
      <Cards />
    </div>
  );
};

export default AllTasks;
