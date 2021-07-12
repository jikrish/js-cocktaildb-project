import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, img, info, glass }) => {
  return (
    <article className="my-cocktail">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="my-cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="my-btn my-btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
