import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './AppointmentHome.css';
import { useNavigate } from "react-router-dom"


function AppointmentHome() {

    const navigate = useNavigate()

    const [listOfAppointments, setListOfAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/appointments").then((response) => {
          setListOfAppointments(response.data)
          })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='center'>
        <div className='title'>
          Consultas
        </div>
        <div className='appointmentsContainer'>
              <div className='appointments_header'>
                  <div>Doutor</div>
                  <div>Paciente</div>
                  <div>Status</div>
                  <div>Horário</div>
              </div>
              {listOfAppointments.map((value, key) => {
              
              if (value.description === "Agendado") {
                return (  
                <div className='appointments hover'  onClick={() => {navigate(`/appointment/${value.id}`)}}>
                    <div className='doctorName'> {value.doctorName} </div>
                    <div className='patientName'> {value.patientName} </div>
                    <div className='status'> {value.description} </div>
                    <div className='datetime'> {value.datetime} </div>
                </div>)
              } else {
                return (
                <div className='appointments hover'>
                    <div className='doctorName item'> {value.doctorName} </div>
                    <div className='patientName item'> {value.patientName} </div>
                    <div className='status item'> {value.description} </div>
                    <div className='datetime item'> {value.datetime} </div>
                </div>)
              }

          })}
          </div>
      </div>
    </div>
  )
}

export default AppointmentHome
