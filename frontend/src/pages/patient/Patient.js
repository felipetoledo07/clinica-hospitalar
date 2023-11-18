import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SideBar from '../util/SideBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Patient() {

    let { id } = useParams();

    const navigate = useNavigate()

    const [listOfAppointments, setListOfAppointments] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/appointments/patient/${id}`).then((response) => {
            setListOfAppointments(response.data)
        })
    }, [id])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='center'>
      <div className='title'>
          Pacientes
        </div>
        <div className='patientsContainer'>
              <div className='patients_header'>
                  <div>Médico</div>
                  <div>Status</div>
                  <div>Data da consulta</div>
              </div>

              {
                listOfAppointments.map((value, key) => {
                    if(value.description === "Agendado") {

                        return (
                            <div className='patients hover' onClick={() => {navigate(`/appointment/${value.AppointmentId}`)}}>
                                <div className='name'> {value.doctorName}</div>
                                <div className='cpf'> {value.description} </div>
                                <div className='birthdate'> {value.datetime} </div>
                            </div>)
                    } else if (value.description === "Realizado") {
                        return (
                            <div className='patients hover' onClick={() => navigate(`/patient/appointment/${value.AppointmentId}`)}>
                                <div className='name'> {value.doctorName}</div>
                                <div className='cpf'> {value.description} </div>
                                <div className='birthdate'> {value.datetime} </div>
                            </div>)

                    } else {
                      return (
                        <div className='patients hover'>
                            <div className='name'> {value.doctorName}</div>
                            <div className='cpf'> {value.description} </div>
                            <div className='birthdate'> {value.datetime} </div>
                        </div>)
                    }
                })
              }

              
        </div>
      </div>
    </div>
  )
}

export default Patient
