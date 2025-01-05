import React from "react";
import { FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FilterButton = ({ onClick, label = "Filter", selectRef }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

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
            <option value="date_DESC">{t("filter.date_DESC")}</option>
            <option value="date_ASC">{t("filter.date_ASC")}</option>
            <option value="cost_ASC">{t("filter.cost_ASC")}</option>
            <option value="cost_DESC">{t("filter.cost_DESC")}</option>
            <option value="artist_ASC">{t("filter.artist_ASC")}</option>
            <option value="artist_DESC">{t("filter.artist_DESC")}</option>
            <option value="location_ASC">{t("filter.location_ASC")}</option>
            <option value="location_DESC">{t("filter.location_DESC")}</option>
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
