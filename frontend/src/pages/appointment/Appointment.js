import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import * as Yup from "yup"
import SideBar from '../util/SideBar';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker/dist/react-datepicker';

function Appointment() {
  
  let { id } = useParams();

  const navigate = useNavigate()

  const [appointmentObject, setAppointmentObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/appointments/${id}`).then((response) => {
        setAppointmentObject(response.data[0])
  })
}, [id])

  const initialValues = {
    record: "",
    recipe: "",
    certificate: "",
  }

  const validationSchema = Yup.object().shape({
    record: Yup.string().required(),
    recipe: Yup.string().required(),
    certificate: Yup.string().required(),
  })

  const cancelAppointment = () => {
    axios.put(`http://localhost:3000/appointments/cancel/${id}`, ).then(() => {})
    navigate("/appointment")
  }

  const onSubmit = (data) => {


    let recordDescription = {
      description: data.record,
      AppointmentId: id

    }

    let recipeDescription = {
      description: data.recipe,
      avaliability: 1,
      AppointmentId: id
    }

    let certificateDescription = {
      description: data.certificate,
      suspention: data.suspention,
      AppointmentId: id
    }


    axios.post("http://localhost:3000/records", recordDescription).then(() => {})
    axios.post("http://localhost:3000/recipes", recipeDescription).then(() => {})
    axios.post("http://localhost:3000/certificates", certificateDescription).then(() => {})
    axios.put(`http://localhost:3000/appointments/done/${id}`).then(() => {})
    navigate("/appointment")

  }

  return (
    <div className='content'>
        <SideBar></SideBar>
        
        <div className='center'>
            <div className='title'>
                Consulta
            </div>
            <div className='appointmentsContainer'>
              <div className='appointment_header'>
                  <div>Nome</div>
                  <div>Status</div>
                  <div>Data</div>
              </div>
              <div className='appointment'>
                  <div className='patientName'> {appointmentObject.patientName} </div>
                  <div className='description'> {appointmentObject.description} </div>
                  <div className='datetime'> {appointmentObject.datetime} </div>
              </div>
              <div className='appointmentContent'>
                  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                      <Form>
                          <div className='appointmentBox'>
                              <div className='appointmentBoxTitle'>
                                Prontuário
                              </div>
                              <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>
                                <ErrorMessage name="record" component="span"></ErrorMessage>
                                <Field className='appointmentTextarea' component="textarea" name="record"></Field>
                              </div>
                          </div>

                          <div className='appointmentBox'>
                              <div className='appointmentBoxTitle'>
                                Receitas
                              </div>
                              <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>
                                <ErrorMessage name="recipe" component="span"></ErrorMessage>
                                <Field className='appointmentTextarea' component="textarea" name='recipe'></Field>
                              </div>
                          </div>

                          <div className='appointmentBox'>
                              <div className='appointmentBoxTitle'>
                                Atestado
                              </div>
                              
                              <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Descrição</label>
                                <ErrorMessage name="certificate" component="span"></ErrorMessage>
                                <Field className='appointmentTextarea' component="textarea" name='certificate'></Field>
                              </div>
                              <div className='appointmentDescription'>
                                <label className='appointmentLabel'>Data de validade</label>
                                <ErrorMessage name="suspention" component="span"></ErrorMessage>
                                <Field className='appointmentInput' type="text" name='suspention'></Field>
                              </div>
                              
                          </div>
                          <div className='appointmentButton'>
                              <button className='redButton' type='button' onClick={cancelAppointment}>Cancelar</button>
                              <button className='greenButton' type='submit'>Salvar</button>
                          </div>
                      </Form>
                  </Formik>
              </div>
          </div>
        </div>



    </div>
  )
}

export default Appointment
