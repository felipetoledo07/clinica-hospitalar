import React from "react";
import PharmacySideBar from "../util/PharmacySideBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipePharmacy() {

  const navigate = useNavigate()

  const [listOfRecipes, setListOfRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/recipes/pharmacy").then((response) => {
      setListOfRecipes(response.data);
    });
  }, []);
  return (
    <div className="content">
      <PharmacySideBar></PharmacySideBar>
      <div className="center">
        <div className="title">Receitas</div>
        <div className="recipesContainer">
          <div className="recipes_header">
            <div>Médico</div>
            <div>Paciente</div>
            <div>Disponibilidade</div>
          </div>

          {listOfRecipes.map((value, key) => {
            let avaliability = value.avaliability
              ? "Disponível"
              : "Indisponível";

            if(value.avaliability) {

                return (
                  <div className="recipes hover" onClick={() => navigate(`/pharmacy/recipe/${value.id}`)}>
                    <div className="doctorName">
                      {" "}
                      {value.doctorFirstname} {value.doctorLastname}
                    </div>
                    <div className="patientName">
                      {" "}
                      {value.patientFirstname} {value.patientLastname}
                    </div>
                    <div className="avaliability"> {avaliability} </div>
                  </div>
                );
            } else {
                return (
                  <div className="recipes hover">
                    <div className="doctorName">
                      {" "}
                      {value.doctorFirstname} {value.doctorLastname}
                    </div>
                    <div className="patientName">
                      {" "}
                      {value.patientFirstname} {value.patientLastname}
                    </div>
                    <div className="avaliability"> {avaliability} </div>
                  </div>
                );

            }

          })}
        </div>
      </div>
    </div>
  );
}

export default RecipePharmacy;
