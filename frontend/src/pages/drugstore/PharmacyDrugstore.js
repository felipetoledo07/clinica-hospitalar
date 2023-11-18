import React from 'react'
import PharmacySideBar from "../util/PharmacySideBar"
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './Drugstore.css';

function PharmacyDrugstore() {
    const [listOfDrugstores, setListOfDrugstores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/drugstores").then((response) => {
            setListOfDrugstores(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <PharmacySideBar></PharmacySideBar>
      <div className='center'>
        <div className='title'>
          Farmácias
        </div>
        <div className='drugstoresContainer'>
                <div className='drugstores_header'>
                    <div>Nome da empresa</div>
                    <div>CNPJ</div>
                </div>

                {listOfDrugstores.map((value, key) => {
                return (
                <div className='drugstores hover'>
                    <div className='name'> {value.name}</div>
                    <div className='cnpj'> {value.cnpj}</div>
                </div>)
            })}
            </div>
      </div>
    </div>
  )
}

export default PharmacyDrugstore
