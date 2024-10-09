import React from "react";

const Cards = () => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: "I have to make this channel the best coding channel in Hindi.",
    },
    {
      title: "CPP Concepts",
      desc: "I have to make this channel the best coding channel in Hindi.",
    },
    {
      title: "Assignments",
      desc: "I have to make this channel the best coding channel in Hindi.",
    },
    {
      title: "Projects",
      desc: "I have to make this channel the best coding channel in Hindi.",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className=" bg-gray-700 rounded-sm p-4">
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="text-gray-300 my-2">{items.desc}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
