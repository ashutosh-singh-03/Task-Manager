import axios from "axios";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit, FaHeart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Cards = ({ home, setInputDiv, data, setUpdatedData }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const handleCompleteTask = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/v2/update-complete-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleImportantTask = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/v2/update-imp-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id, title, desc) => {
    setInputDiv("fixed");
    setUpdatedData({ id: id, title: title, desc: desc });
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/v2/delete-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="flex flex-col justify-between bg-gray-800 rounded-lg shadow-md p-4 transition-transform duration-200 hover:scale-105">
            <div>
              <h3 className="text-xl font-semibold text-white">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.complete === false ? "bg-red-500" : "bg-green-600"
                } p-2 rounded w-3/6 hover:bg-opacity-80 transition duration-200"}
                onClick={() => handleCompleteTask(items._id)}
                aria-label={`Mark task ${items.complete ? 'incomplete' : 'complete'}`}
              >
                {items.complete === true ? "Completed" : "Incomplete"}
              </button>
              <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">
                <button onClick={() => handleImportantTask(items._id)} aria-label={`Mark task as ${items.important ? 'not important' : 'important'}`}> 
                  {items.important === false ? (
                    <CiHeart />
                  ) : (
                    <FaHeart className="text-red-500" />
                  )}
                </button>
                {home !== "false" && (
                  <button
                    onClick={() =>
                      handleUpdate(items._id, items.title, items.desc)
                    }
                    aria-label="Edit task"
                  >
                    <FaEdit />
                  </button>
                )}
                <button onClick={() => deleteTask(items._id)} aria-label="Delete task">
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-4 text-gray-300 hover:bg-opacity-80 transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
          aria-label="Add new task"
        >
          <IoIosAddCircleOutline className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
