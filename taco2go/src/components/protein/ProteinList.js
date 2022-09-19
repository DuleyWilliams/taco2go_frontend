import React, { useEffect, useState } from 'react';
import { ProteinCard } from './ProteinCard';
import { getAllProteins, getProteinById, deleteProtein } from '../../modules/ProteinManager';

export const ProteinList = () => {
    const [proteins, setProteins] = useState([]);
  
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
    <div className="container-cards">
    {proteins.map(protein =>
      <ProteinCard
        key={protein.id}
        protein={protein}
        handleDeleteProtein={handleDeleteProtein} />)}
  </div>
  );
};
