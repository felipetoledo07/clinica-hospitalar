import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './AppointmentHome.css';


function AppointmentHome() {

    const [listOfAppointments, setListOfAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/appointments").then((response) => {
          setListOfAppointments(response.data[0])
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
              return (
              <div className='appointments'>
                  <div className='doctorName'> {value.doctorName} </div>
                  <div className='patientName'> {value.patientName} </div>
                  <div className='status'> {value.description} </div>
                  <div className='datetime'> {value.datetime} </div>
              </div>)
          })}
          </div>
      </div>
    </div>
  )
}

export default AppointmentHome
