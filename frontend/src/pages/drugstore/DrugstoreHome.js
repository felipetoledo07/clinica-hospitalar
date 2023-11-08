import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './Drugstore.css';

function DrugstoreHome() {
    const [listOfDrugstores, setListOfDrugstores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/drugstores").then((response) => {
            setListOfDrugstores(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='drugstoresContainer'>
            <div className='drugstores_header'>
                <div>Nome da empresa</div>
                <div>CNPJ</div>
            </div>

            {listOfDrugstores.map((value, key) => {
            return (
            <div className='drugstores'>
                <div className='name'> {value.name}</div>
                <div className='cnpj'> {value.cnpj}</div>
            </div>)
        })}
        </div>
    </div>
  )
}

export default DrugstoreHome
