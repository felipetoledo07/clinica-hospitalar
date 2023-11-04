import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import "./Doctor.css"
import { useNavigate } from 'react-router-dom'


function DoctorRegistration() {

    const navigate = useNavigate()

    const initialValues = {
        firstname: "",
        lasname: "",
        cpf: "",
        password: "",
        medical_license: "",
        openning_hours: "",
        RoleId: "",
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        cpf: Yup.string().required(),
        password: Yup.string().required(),
        medical_license: Yup.string().required(),
        openning_hours: Yup.string().required(),
        RoleId: Yup.number().required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3000/doctors", data).then(() => {
            navigate("/doctor/login")
        })
    }


  return (
    <div className='form'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                    <label>Nome: </label>
                    <ErrorMessage name="firstname" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="firstname" placeholder=""></Field>
                </div>

                <div>
                    <label>Sobrenome: </label>
                    <ErrorMessage name="lastname" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="lastname" placeholder=""></Field>
                </div>

                <div>
                    <label>CPF: </label>
                    <ErrorMessage name="cpf" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="cpf" placeholder=""></Field>
                </div>
                
                <div>
                    <label>Senha: </label>
                    <ErrorMessage name="password" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="password" placeholder="" type="password"></Field>
                </div>
                
                <div>
                    <label>CRM: </label>
                    <ErrorMessage name="medical_license" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="medical_license" placeholder=""></Field>
                </div>

                <div>
                    <label>Horário de atendimento: </label>
                    <ErrorMessage name="openning_hours" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="openning_hours" placeholder=""></Field>
                </div>
                
                <div>
                    <label>Especialidade: </label>
                    <ErrorMessage name="RoleId" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="RoleId" placeholder=""></Field>
                </div>

                <button type='submit'>Registrar</button>
            </Form>
        </Formik>
    </div>
  )
}

export default DoctorRegistration
