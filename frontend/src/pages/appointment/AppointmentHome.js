import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './AppointmentHome.css';


function AppointmentHome() {

    const [listOfAppointments, setListOfAppointments] = useState([]);

    const [doctor, setDoctor] = useState ([]);

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

              // axios.get(`http://localhost:3000/doctors/${value.DoctorId}`).then((response) => {
              //   setDoctor(response.data)
              //   console.log(doctor.id)
            // })

              return (
              <div className='appointments'>
                  <div className='DoctorId'> {value.DoctorId} </div>
                  <div className='PatientId'> {value.PatientId} </div>
                  <div className='StatusId'> {value.StatusId} </div>
                  <div className='specialization'> {value.datetime} </div>
                  
              </div>)
          })}
          </div>
      </div>
    </div>
  )
}

export default AppointmentHome
