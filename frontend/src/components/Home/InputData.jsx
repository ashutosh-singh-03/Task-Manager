import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const InputData = ({ InputDiv, setInputDiv, UpdatedData, setUpdatedData }) => {
  const [Data, setData] = useState({ title: "", desc: "" });

  useEffect(() => {
    setData({ title: UpdatedData.title, desc: UpdatedData.desc });
  }, [UpdatedData]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submitData = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
    } else {
      await axios.post("http://localhost:8000/api/v2/create-task", Data, {
        headers,
      });
      setData({ title: "", desc: "" });
      setInputDiv("hidden");
    }
  };

  const UpdateTask = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
    } else {
      await axios.put(
        `http://localhost:8000/api/v2/update-task/${UpdatedData.id}`,
        Data,
        {
          headers,
        }
      );
      setUpdatedData({ id: "", title: "", desc: "" });
      setData({ title: "", desc: "" });
      setInputDiv("hidden");
    }
  };
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
            <button
              className="text-2xl"
              onClick={() => {
                setInputDiv("hidden");
                setData({ title: "", desc: "" }); // Reset the input fields
                setUpdatedData({ id: "", title: "", desc: "" }); // Reset the updated data
              }}
            >
              <IoCloseCircleOutline />
            </button>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
            value={Data.title}
            onChange={change}
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description of the Task.."
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
            value={Data.desc}
            onChange={change}
          ></textarea>
          {UpdatedData.id === "" ? (
            <button
              className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold"
              onClick={UpdateTask}
            >
              Submit
            </button>
          ) : (
            <button
              className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold"
              onClick={submitData}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default InputData;
