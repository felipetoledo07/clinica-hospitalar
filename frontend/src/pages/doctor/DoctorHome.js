import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './Doctor.css';

function DoctorHome() {
    const [listOfDoctors, setListOfDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/doctors").then((response) => {
            setListOfDoctors(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='center'>
        <div className='title'>
          Médicos
        </div>
        <div className='doctorsContainer'>
                <div className='doctors_header'>
                    <div>Nome</div>
                    <div>CPF</div>
                    <div>CRM</div>
                    <div>Horário de atendimento</div>
                    <div>Especialidade</div>
                </div>

                {listOfDoctors.map((value, key) => {
                return (
                <div className='doctors'>
                    <div className='name'> {value.firstname} {value.lastname}</div>
                    <div className='cpf'> {value.cpf}</div>
                    <div className='medical_license'> {value.medical_license}</div>
                    <div className='openning_hours'> {value.openning_hours}</div>
                    <div className='RoleId'> {value.description}</div>
                </div>)
            })}
            </div>
      </div>
    </div>
  )
}

export default DoctorHome
