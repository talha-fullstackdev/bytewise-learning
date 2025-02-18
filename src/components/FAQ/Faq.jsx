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
    <div className="max-w-2xl mx-auto mt-6 p-4">
      {/* FAQ Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Discover answers to common inquiries about our services and offerings.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="border-b pb-3">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleDisplay(item.id)}
            >
              <p className="text-lg font-medium">{item.id}. {item.question}</p>
              <button className="text-xl">
                {visible[item.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>

            {/* Answer Section (only shown when `visible[item.id]` is true) */}
            {visible[item.id] && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
