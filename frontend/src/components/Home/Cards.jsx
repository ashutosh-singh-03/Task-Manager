import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = () => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: "I have to make this channel the best coding channel in Hindi.",
      status: "Incomplete",
    },
    {
      title: "CPP Concepts",
      desc: "CPP is one of the basic programming languages that makes the base of any language.",
      status: "Complete",
    },
    {
      title: "Assignments",
      desc: "I have to make this channel the best coding channel in Hindi.",
      status: "Incomplete",
    },
    {
      title: "Projects",
      desc: "I have to make this channel the best coding channel in Hindi.",
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
              <button className={`${items.status === "Incomplete" ? "bg-red-400" : "bg-green-700" } p-2 rounded w-3/6 hover:scale-105`}>
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
      <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300">
        <IoIosAddCircleOutline className="text-5xl" />
        <h2 className="text-2xl mt-4">Add Task</h2>
      </div>
    </div>
  );
};

export default Cards;
