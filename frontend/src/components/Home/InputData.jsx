import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      <div
        className={`${InputDiv} top-0 left-0 w-full h-screen bg-gray-800 opacity-50`}
      ></div>
      <div
        className={`${InputDiv} top-0 left-0 w-full h-screen flex items-center justify-center`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => setInputDiv("hidden")}>
              <IoCloseCircleOutline />
            </button>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description of the Task.."
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          ></textarea>
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
