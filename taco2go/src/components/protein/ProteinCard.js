import React from 'react';
import "./Protein.css";
import { Link } from "react-router-dom";

export const ProteinCard = ({ protein, handleDeleteProtein }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={'🌮'} alt="My Protein" />
        </picture>
        <h3>Name: <span className="card-protein">
          {protein.id}
        </span></h3>
        <p>Protein: {protein.id}</p>
        <Link to={`/proteins/${protein.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteProtein(protein.id)}>Remove</button>
      </div>
    </div>
  );
}
