import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import './Drugstore.css'

function DrugstoreLogin() {

    const initialValues = {
        cnpj: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        cnpj: Yup.string().required(),
        password: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3000/drugstores/login", data).then((response) => {
            console.log(response)
        })
    }

  return (
    <div className='center'>
        <div className='form'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className='login_title'>
                        Logar
                    </div>

                    <div className='flex_column'>
                        <label>CNPJ: </label>
                        <ErrorMessage name="cnpj" component="div"></ErrorMessage>
                        <Field className="input" id="inputCreateDoctor" name="cnpj" placeholder=""></Field>
                    </div>
                    
                    <div className='flex_column'>
                        <label>Senha: </label>
                        <ErrorMessage name="password" component="div"></ErrorMessage>
                        <Field className="input" id="inputCreateDoctor" name="password" placeholder="" type="password"></Field>
                    </div>

                    <button className='login_button' type='submit'>Login</button>

                    <div>
                        <a className='register_button' href='/drugstore/registration'>Registrar-se</a>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default DrugstoreLogin
