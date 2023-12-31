import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './RecipeHome.css';

function RecipeHome() {
    const [listOfRecipes, setListOfRecipes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/recipes").then((response) => {
          setListOfRecipes(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='center'>
        <div className='title'>
          Receitas
        </div>
        <div className='recipesContainer'>
              <div className='recipes_header'>
                  <div>Descrição</div>
                  <div>Disponibilidade</div>
              </div>

              {listOfRecipes.map((value, key) => {

                let avaliability_display = value.avaliability && new Date(value.expire_date) >= new Date() ? "Disponível" : "Indisponível"

              return (
              <div className='recipes hover'>
                  <div className='description'> {value.description}</div>
                  <div className='avaliability'> {avaliability_display} </div>
              </div>)
          })}
          </div>
      </div>
    </div>
  )
}

export default RecipeHome
