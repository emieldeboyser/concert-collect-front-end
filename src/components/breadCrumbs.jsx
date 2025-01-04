import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="breadcrumbs mx-36 mt-3">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <span key={index} className="breadcrumb-item">
          <Link to={match.pathname} className="breadcrumb-link">
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="breadcrumb-separator"> / </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
