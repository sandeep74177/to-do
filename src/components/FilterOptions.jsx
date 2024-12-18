import React from "react";

const FilterOptions = ({ setFilterColor }) => {
  return (
    <div className="filters">
      <span>Filter by Color:</span>
      <label>
        <input
          type="radio"
          name="color"
          onChange={() => setFilterColor("green")}
        />
        Green
      </label>
      <label>
        <input
          type="radio"
          name="color"
          onChange={() => setFilterColor("blue")}
        />
        Blue
      </label>
      <label>
        <input
          type="radio"
          name="color"
          onChange={() => setFilterColor("purple")}
        />
        Purple
      </label>
      <label>
        <input
          type="radio"
          name="color"
          onChange={() => setFilterColor("orange")}
        />
        orange
      </label>
      <label>
        <input
          type="radio"
          name="color"
          onChange={() => setFilterColor("")}
        />
        All
      </label>
      
    </div>
  );
};

export default FilterOptions;
