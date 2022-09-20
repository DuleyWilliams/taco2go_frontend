import React, { useEffect, useState } from 'react';
import { ProteinCard } from './ProteinCard';
import {useParams, useNavigate} from "react-router-dom"
import { getAllProteins, getProteinById, deleteProtein } from '../../modules/ProteinManager';

export const ProteinList = () => {
    const [proteins, setProteins] = useState([]);

    const navigate = useNavigate();
  
    const getProteins = () => {
    return getAllProteins().then(proteinsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(proteinsFromAPI);
    });
  };

    const handleDeleteProtein = id => {
        deleteProtein(id)
        .then(() => getAllProteins().then(setProteins));
    };

  useEffect(() => {
    getProteins();
  }, []);

  return (
    <>
    <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => {navigate("/proteins/create")}}>
        Protein
    </button>
    </section>
    <div className="container-cards">
    {proteins.map(protein =>
      <ProteinCard
        key={protein.id}
        protein={protein}
        handleDeleteProtein={handleDeleteProtein} />)}
  </div>
  </>
  );
};
