import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import "./Drugstore.css"
import { useNavigate } from 'react-router-dom'


function DrugstoreRegistration() {

    const navigate = useNavigate()

    const initialValues = {
        name: "",
        cnpj: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        cnpj: Yup.string().required(),
        password: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3000/drugstores", data).then(() => {
            navigate("/drugstore/login")
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
                                <label>Nome da empresa</label>
                                <ErrorMessage name="name" component="div"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="name" placeholder=""></Field>
                            </div>

                            <div className='flex_column'>
                                <label>CNPJ</label>
                                <ErrorMessage name="cnpj" component="div"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="cnpj" placeholder=""></Field>
                            </div>
                            
                            <div className='flex_column'>
                                <label>Senha</label>
                                <ErrorMessage name="password" component="div"></ErrorMessage>
                                <Field className="input" id="inputCreateDoctor" name="password" placeholder="" type="password"></Field>
                            </div>

                            <button className='login_button' type='submit'>Registrar</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default DrugstoreRegistration
