import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import "./Doctor.css"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function DoctorRegistration() {

    const [listOfStatus, setListOfStatus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/roles").then((response) => {
            setListOfStatus(response.data)
          })
    }, [])

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
    <div className='center'>
        <div className='form'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className='login_title'>
                        Cadastrar
                    </div>
                    <div className='row'>
                        <div>
                            <div className='flex_column'>
                                <label>Nome: </label>
                                <ErrorMessage name="firstname" component="span"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="firstname" placeholder=""></Field>
                            </div>

                            <div className='flex_column'>
                                <label>Sobrenome: </label>
                                <ErrorMessage name="lastname" component="span"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="lastname" placeholder=""></Field>
                            </div>

                            <div className='flex_column'>
                                <label>CPF: </label>
                                <ErrorMessage name="cpf" component="span"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="cpf" placeholder=""></Field>
                            </div>
                            
                            <div className='flex_column'>
                                <label>Senha: </label>
                                <ErrorMessage name="password" component="span"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="password" placeholder="" type="password"></Field>
                            </div>
                        </div>
                        <div>
                            <div className='flex_column'>
                                <label>CRM: </label>
                                <ErrorMessage name="medical_license" component="span"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="medical_license" placeholder=""></Field>
                            </div>

                            <div className='flex_column'>
                                <label>Horário de atendimento: </label>
                                <ErrorMessage name="openning_hours" component="span"></ErrorMessage>
                                <Field as="select" name='openning_hours'>
                                    <option>Selecione</option>
                                    <option>Matutino</option>
                                    <option>Vespertino</option>
                                </Field>
                            </div>
                            
                            <div className='flex_column'>
                                <label>Especialidade: </label>
                                <ErrorMessage name="RoleId" component="span"></ErrorMessage>
                                <Field as="select" name='RoleId'>
                                    <option>Selecione</option>
                                    {
                                    listOfStatus.map((value, key) => {
                                        return (
                                            <option value={value.id}>{value.description}</option>
                                        )
                                    })}
                                </Field>
                            </div>
                        </div>
                    </div>

                    <button className='login_button' type='submit'>Registrar</button>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default DoctorRegistration
