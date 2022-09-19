import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { deleteProtein, getProteinById } from "../../modules/ProteinManager";
import "./ProteinDetail.css";

export const ProteinDetail = () => {
  const [protein, setProtein] = useState({ type: "", id: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {proteinId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in ProteinManger and re-direct to the protein list.
    setIsLoading(true);
    deleteProtein(proteinId).then(() =>
      navigate("/proteins")
    );
  };

  useEffect(() => {
    //getProteinById(id) from ProteinManager and hang on to the data; put it into state
    console.log("useEffect", proteinId)
    getProteinById(proteinId)
      .then(protein => {
        setProtein(protein);
        setIsLoading(false);
      });
  }, [proteinId]);

  return (
    <section className="protein">
      <h3 className="protein__type">{protein.type}</h3>
      <div className="protein__id">{protein.id}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
    );
};

    {/* What's up with the question mark???? See below.*/}
    {/* <div className="animal__location">Location: {animal.location?.name}</div>
    <div className="animal__owner">Customer: {animal.customer?.name}</div> */}