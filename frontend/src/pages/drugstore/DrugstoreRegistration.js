import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import "./Drugstore.css"
import { useNavigate } from 'react-router-dom'


function DrugstoreRegistration() {

    const navigate = useNavigate()

    const initialValues = {
        cnpj: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        cnpj: Yup.string().required(),
        password: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3000/drugstores", data).then(() => {
            navigate("/drugstore/login")
        })
    }


  return (
    <div className='form'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                    <label>CNPJ: </label>
                    <ErrorMessage name="cnpj" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="cnpj" placeholder=""></Field>
                </div>
                
                <div>
                    <label>Senha: </label>
                    <ErrorMessage name="password" component="div"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="password" placeholder="" type="password"></Field>
                </div>

                <button type='submit'>Registrar</button>
            </Form>
        </Formik>
    </div>
  )
}

export default DrugstoreRegistration
