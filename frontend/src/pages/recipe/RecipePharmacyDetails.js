import PharmacySideBar from "../util/PharmacySideBar";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipePharmacyDetails() {
  let { id } = useParams();

  function finalizeRecipe() {
      axios.put(`http://localhost:3000/recipes/pharmacy/${id}`).then((response) => {
      });
      navigate("/pharmacy/recipe")
  }

  const navigate = useNavigate();

  const [recipeObject, setRecipeObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/pharmacy/${id}`).then((response) => {
        setRecipeObject(response.data[0]);
    });
  }, [id]);

  return (
    <div className="content">
      <PharmacySideBar></PharmacySideBar>

      <div className="center">
        <div className="title">Receitas</div>
        <div className="appointmentsContainer">
          <div className="appointment_header">
            <div>Paciente</div>
            <div>Médico</div>
            <div>Status</div>
            <div>Data</div>
          </div>
          <div className="appointment">
            <div className="patientName"> {recipeObject.patientFirstname} {recipeObject.patientLastname}</div>
            <div className="description"> {recipeObject.doctorFirstname}  {recipeObject.doctorLastname}</div>
            <div className="datetime"> {recipeObject.avaliability ? "Disponível" : "Indisponível"} </div>
            <div className="datetime"> {recipeObject.datetime} </div>
          </div>
          <div className="appointmentContent">
            <div className="appointmentBox">
              <div className="appointmentBoxTitle">Receita</div>
              <div className="appointmentDescription">
                <label className="appointmentLabel">Descrição</label>
                <div>
                    {recipeObject.description}
                </div>
              </div>
            </div>
            <div className="appointmentButton">
              <button className="greenButton" type="button" onClick={finalizeRecipe}>
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePharmacyDetails;
