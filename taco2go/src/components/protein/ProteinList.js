import React, { useEffect } from 'react';
import { getAllProteins, getProteinById } from '../../modules/ProteinManager';

export const ProteinList = () => {
  const getProteins = () => {
    return getAllProteins().then(proteinsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(proteinsFromAPI);
    });
  };

  useEffect(() => {
    getProteins();
  }, []);

  return (
    <div className="container-cards">
      We'll put some animals here eventually...
    </div>
  );
};
