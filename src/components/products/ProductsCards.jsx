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
    <div className="mt-6">
      <div className="flex justify-center gap-4 text-md">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("App")}>App</button>
        <button onClick={() => handleFilter("Product")}>Product</button>
        <button onClick={() => handleFilter("Branding")}>Branding</button>
        <button onClick={() => handleFilter("Book")}>Books</button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-wrap mt-4 gap-6 md:justify-around">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="w-[400px] flex flex-col items-center" key={index}>
              <img src={item.image} alt={item.name} className="w-[350px] md:w-[450px]" />
              <h2 className="self-start ml-6 font-semibold text-xl">{item.name}</h2>
              <p className="self-start ml-6 mt-3 text-md">{item.para}</p>
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
