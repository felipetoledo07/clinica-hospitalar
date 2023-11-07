import React from 'react'
import SideBar from '../util/SideBar'
import axios from "axios"
import { useEffect, useState } from 'react';
import '../../App.css';
import './CertificateHome.css';

function CertificateHome() {
    const [listOfCertificates, setListOfCertificates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/certificates").then((response) => {
            setListOfCertificates(response.data)
        })
    }, [])

  return (
    <div className='content'>
      <SideBar></SideBar>
      <div className='certificatesContainer'>
            <div className='certificates_header'>
                <div>Descrição</div>
                <div>Data de validade</div>
            </div>

            {listOfCertificates.map((value, key) => {
            return (
            <div className='certificates'>
                <div className='name'> {value.description}</div>
                <div className='cpf'> {value.suspention} </div>
            </div>)
        })}
        </div>
    </div>
  )
}

export default CertificateHome
