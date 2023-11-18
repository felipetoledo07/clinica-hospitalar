import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideBar() {

    const navigate = useNavigate()

  return (
    <div className='sideBar'>
        <div>
            <a className='home_button' href="/">Clínica123</a>
        </div>
        <div className='sidebarItemsContainer'>
            <div className='sidebarItem hover' onClick={() => {navigate("/appointment")}}>
                <a href='/appointment'>Consultas</a> 
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/patient")}}>
                <a href='/patient'>Pacientes</a>
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/doctor")}}>
                <a href='/doctor'>Médicos</a>
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/recipe")}}>
                <a href='/recipe'>Receitas</a>
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/certificate")}}>
                <a href='/certificate'>Atestados</a>
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/drugstore")}}>
                <a href='/drugstore'>Farmácia</a>
            </div>
        </div>
    </div>
  )
}

export default SideBar
