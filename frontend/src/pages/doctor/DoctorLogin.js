import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import './Doctor.css'
import { useNavigate } from "react-router-dom" 

function DoctorLogin() {

    const navigate = useNavigate();

    const initialValues = {
        cpf: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        cpf: Yup.string().required(),
        password: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3000/doctors/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data)
                navigate("/appointment")
            }

        })
    }

  return (
    <div className='form'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>

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

                <button type='submit'>Login</button>

                <div>
                    <a href='/doctor/registration'>Registrar-se</a>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default DoctorLogin
