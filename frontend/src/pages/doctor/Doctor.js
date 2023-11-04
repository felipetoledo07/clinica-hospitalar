import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

function Doctor() {
  
  let { id } = useParams();

  const [doctorObject, setDoctorObject] = useState({});

  useEffect(() => {
      axios.get(`http://localhost:3000/doctors/${id}`).then((response) => {
        setDoctorObject(response.data)
    })
}, [])

  return (
    <div className='doctorPage'>
      {doctorObject.firstname} 
    </div>
  )
}

export default Doctor
