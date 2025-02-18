import React, { useState } from "react";
import data from "./data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Faq = () => {
  const [visible, setVisible] = useState({});

  // Function to toggle visibility of a specific question
  const handleDisplay = (id) => {
    setVisible((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the visibility of the clicked question
    }));
  };

  return (
    <div className=" mx-auto mt-6 p-4 md:flex md:m-0 md:justify-center md:gap-4">
      {/* FAQ Header */}
      <div className="mb-6 md:max-w-[300px]">
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-600">
          Frequently Asked <span className=" md:text-4xl text-black">Questions</span>
        </h2>
        <p className="text-gray-600 mt-2 md:text-xl">
          Discover answers to common inquiries about our services and offerings.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-6 ">
        {data.map((item) => (
          <div key={item.id} className="border pt-3 pb-3 bg-gray-200 rounded-lg">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer px-2"
              onClick={() => handleDisplay(item.id)}
            >
              <p className="text-sm md:text-lg font-medium "><span className="text-[#078791]">{item.id}</span>. {item.question}</p>
              <button className="md:text-xl text-sm">
                {visible[item.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>

            {/* Answer Section (only shown when `visible[item.id]` is true) */}
            {visible[item.id] && (
              <p className="mt-2 text-gray-700 text-sm md:text-lg md:w-[590px] px-2 ">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
