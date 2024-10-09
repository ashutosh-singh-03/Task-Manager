import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Cards = ({ home, setInputDiv }) => {
  const data = [
    {
      title: "Ashutosh Singh",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, numquam?",
      status: "Incomplete",
    },
    {
      title: "Shivam Kumar",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, numquam?",
      status: "Complete",
    },
    {
      title: "Pinkesh Kumar",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, numquam?",
      status: "Incomplete",
    },
    {
      title: "Ankit Kumar",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, numquam?",
      status: "Incomplete",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="flex flex-col justify-between bg-gray-700 rounded-sm p-4">
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.status === "Incomplete" ? "bg-red-400" : "bg-green-700"
                } p-2 rounded w-3/6 hover:scale-105`}
              >
                {items.status}
              </button>
              <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
        >
          <IoIosAddCircleOutline className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
