import React, { useState } from "react";
import data from "./Data"; 
const ProductsCards = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered); 
    }
  };
  return (
    <div className="mt-6 px-4 md:px-10">

      <div className="flex justify-center gap-6 text-md mb-6 flex-wrap">
        <button className="cursor-pointer hover:text-[#045f66]" onClick={() => handleFilter("All")}>All</button>
        <button className="cursor-pointer hover:text-[#045f66]" onClick={() => handleFilter("App")}>App</button>
        <button className="cursor-pointer hover:text-[#045f66]" onClick={() => handleFilter("Product")}>Product</button>
        <button className="cursor-pointer hover:text-[#045f66]" onClick={() => handleFilter("Branding")}>Branding</button>
        <button className="cursor-pointer hover:text-[#045f66]" onClick={() => handleFilter("Book")}>Books</button>
      </div>

      <div className="flex flex-wrap mt-4 gap-6 justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex flex-col items-center bg-white p-4 rounded-lg shadow-lg mb-6" key={index}>
              <img src={item.image} alt={item.name} className="w-full h-auto rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.para}</p>
            </div>
          ))
        ) : (
          <p>No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsCards;
