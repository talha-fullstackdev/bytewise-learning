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
    <div>
      <div className="flex gap-10">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("App")}>App</button>
        <button onClick={() => handleFilter("Product")}>Product</button>
        <button onClick={() => handleFilter("Branding")}>Branding</button>
        <button onClick={() => handleFilter("Book")}>Books</button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="w-[400px]" key={index}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.para}</p>
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
