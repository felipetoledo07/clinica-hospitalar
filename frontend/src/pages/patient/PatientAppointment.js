import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from '../util/SideBar';
import axios from 'axios';

function PatientAppointment() {

    let { id } = useParams();

  const navigate = useNavigate()

  const [appointmentObject, setAppointmentObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/appointments/done/${id}`).then((response) => {
        setAppointmentObject(response.data[0])
  })
}, [id])

    return (
        <div className='content'>
            <SideBar></SideBar>
            
            <div className='center'>
                <div className='title'>
                    Consulta
                </div>
                <div className='appointmentsContainer'>
                  <div className='appointment_header'>
                      <div>Médico</div>
                      <div>Status</div>
                      <div>Data</div>
                  </div>
                  <div className='appointment'>
                      <div className='patientName'> {appointmentObject.doctorName} </div>
                      <div className='description'> {appointmentObject.description} </div>
                      <div className='datetime'> {(appointmentObject.datetime)}</div>
                  </div>
                  <div className='appointmentContent'>
                        <div className='appointmentBox'>
                            <div className='appointmentBoxTitle'>
                            Prontuário
                            </div>
                            <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>      
                                <div>
                                    {appointmentObject.recordDescription}    
                                </div>                              
                            </div>
                        </div>

                        <div className='appointmentBox'>
                            <div className='appointmentBoxTitle'>
                            Receitas
                            </div>
                            <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>    
                                    <div>
                                        {appointmentObject.recipeDescription}    
                                    </div>                                    
                                </div>
                        </div>

                        <div className='appointmentBox'>
                            <div className='appointmentBoxTitle'>
                            Atestado
                            </div>
                            
                            <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>
                                <div>
                                    {appointmentObject.certificateDescription}    
                                </div>    
                            </div>
                            <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Data de validade</label>
                                <div>
                                    {appointmentObject.suspention}    
                                </div>    
                            </div>
                            
                        </div>
                  </div>
              </div>
            </div>
    
    
    
        </div>
      )
}

export default PatientAppointment
