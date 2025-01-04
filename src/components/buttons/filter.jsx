import React from "react";
import { FaFilter } from "react-icons/fa";

const FilterButton = ({ onClick, label = "Filter", selectRef }) => {
  const [open, setOpen] = React.useState(false);

  const click = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-5">
      {open ? (
        <div className="flex items-center gap-2 cursor-pointer">
          <div onClick={click}>
            <FaFilter />
          </div>
          <select
            ref={selectRef}
            className="border border-gray-300 rounded-lg shadow-md w-36"
            onChange={onClick}
          >
            <option value="date_DESC">Date (Newest)</option>
            <option value="date_ASC">Date (Oldest)</option>
            <option value="cost_ASC">Cost (Low to High)</option>
            <option value="cost_DESC">Cost (High to Low)</option>
            <option value="artist_ASC">Artist (A-Z)</option>
            <option value="artist_DESC">Artist (Z-A)</option>
            <option value="location_ASC">Location (A-Z)</option>
            <option value="location_DESC">Location (Z-A)</option>
          </select>
        </div>
      ) : (
        <div className="flex items-center gap-2 cursor-pointer" onClick={click}>
          <FaFilter />
          {label}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
