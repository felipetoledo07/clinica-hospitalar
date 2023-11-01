import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

function DoctorsPage() {
    const [listOfDoctors, setListOfDoctors] = useState([]);
    const history = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/doctors").then((response) => {
        setListOfDoctors(response.data)
        })
    }, [])

    return (
        <div className='doctorsContainer'>
            {listOfDoctors.map((value, key) => {
            return (
            <div className='doctors' onClick={() => {history(`/doctor/${value.id}`)}}>
                <div className='firstname'> {value.firstname} {value.lastname}</div>
                <div className='specialization'> {value.specialization} </div>
                <div className='openning_hours'> {value.openning_hours} </div>
            </div>)
        })}
        </div>
    )
}

export default DoctorsPage
