import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateDoctor() {
    
    let history = useNavigate()
    
    const initialValues = {
        firstname: "",
        lasname: "",
        specialization: "",
        openning_hours: "",
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        specialization: Yup.string().required(),
        openning_hours: Yup.string().required()
    })

    const onSubmit = (data) => {
            axios.post("http://localhost:3000/doctors", data).then((response) => {
            history("/")
        })
    }


    return (
        <div className='createDoctorPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Nome: </label>
                    <ErrorMessage name="firstname" component="span"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="firstname" placeholder=""></Field>

                    <label>Sobrenome: </label>
                    <ErrorMessage name="lastname" component="span"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="lastname" placeholder=""></Field>

                    <label>Especialidade: </label>
                    <ErrorMessage name="specialization" component="span"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="specialization" placeholder=""></Field>

                    <label>Horário de atendimento: </label>
                    <ErrorMessage name="openning_hours" component="span"></ErrorMessage>
                    <Field id="inputCreateDoctor" name="openning_hours" placeholder=""></Field>

                    <button type='submit'>Criar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateDoctor
