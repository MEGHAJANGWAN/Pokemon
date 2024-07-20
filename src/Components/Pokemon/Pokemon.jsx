import React from 'react'
import "./Pokemon.css";
import { Link } from 'react-router-dom';

function Pokemon({name, image, id}) {
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <h2 className="pokemon-name">{name}</h2>
        <div className="pokemon-image-wrapper">
          <img src={image} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon