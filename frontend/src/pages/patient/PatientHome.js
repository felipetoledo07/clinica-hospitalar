import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './PatientHome.css';


function PatientHome() {
    const [listOfPatients, setListOfPatients] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/patients").then((response) => {
        setListOfPatients(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='patientsContainer'>
            <div className='patients_header'>
                <div>Nome</div>
                <div>CPF</div>
                <div>Data de nascimento</div>
                <div>Endereço</div>
            </div>

            {listOfPatients.map((value, key) => {
            return (
            <div className='patients'>
                <div className='name'> {value.firstname} {value.lastname}</div>
                <div className='cpf'> {value.cpf} </div>
                <div className='birthdate'> {value.birth_date} </div>
                <div className='address'> {value.address} </div>
            </div>)
        })}
        </div>
    </div>
  )
}

export default PatientHome
